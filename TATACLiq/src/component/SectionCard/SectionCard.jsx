import React, { useState } from 'react';
import { Box, Button, Collapse, Heading, Image, Text, Select, Flex, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Center } from '@chakra-ui/react';
import ProductCard from '../ProductCard/ProductCard';
import Footwear from '../../assets/images/FootWear.png';
import Electronics from '../../assets/images/Electronics.png';
import Menswear from '../../assets/images/MensWear.png';
import Womenswear from '../../assets/images/WomensWear.png';
import Kids from '../../assets/images/Kids.png';
import Beauty from '../../assets/images/Beauty.png';
import Home from '../../assets/images/Home.png';
import Eyewear from '../../assets/images/Eyewear.png';

const sectionImages = {
    Footwear: Footwear,
    Electronics: Electronics,
    Menswear: Menswear,
    Womenswear: Womenswear,
    Kids: Kids,
    Home: Home,
    Beauty: Beauty,
    Eyewear: Eyewear
};

const SectionCard = ({ department, products, handleImageError }) => {
    const [showProducts, setShowProducts] = useState(false);
    const [sortOption, setSortOption] = useState('product');

    const toggleShowProducts = () => {
        setShowProducts(!showProducts);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortProducts = (products, sortOption) => {
        return [...products].sort((a, b) => {
            if (sortOption === 'price') {
                return a.price - b.price;
            } else if (sortOption === 'product_type') {
                return a.product_type.localeCompare(b.product_type);
            }
            return 0;
        });
    };

    const sortedProducts = sortProducts(products, sortOption);
    const productCount = products.length;

    return (
        <Box  borderWidth="0px" borderRadius="lg" overflow="hidden" width="150px" >
            <Button px={0} height="150px" width="150px" onClick={toggleShowProducts} margin={0}  >
                <Box  >
                    <Image
                        src={sectionImages[department]}
                        alt={`${department} image`}
                        objectFit="cover"
                        onError={handleImageError}
                    />
                </Box>
            </Button>
            <Collapse in={showProducts} animateOpacity>
                <Box p={5}>
                    <Heading>
                        {department} ({productCount} products)
                    </Heading>
                    <Flex justify="flex-end" mb={4}>
                        <Select
                            value={sortOption}
                            onChange={handleSortChange}
                            bg="white"
                            borderColor="gray.300"
                            borderRadius="md"
                            focusBorderColor="teal.500"
                            _hover={{ borderColor: "gray.400" }}
                            _focus={{ boxShadow: "outline" }}
                            width="200px"
                        >
                            <option value="price">Sort by Price</option>
                            <option value="product_type">Sort by Product Type</option>
                        </Select>
                    </Flex>
                    <SimpleGrid columns={[1, null, 3]} spacing="40px">
                        {sortedProducts.slice(0, 10).map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                handleImageError={handleImageError}
                            />
                        ))}
                    </SimpleGrid>
                    <Modal isOpen={showProducts} onClose={toggleShowProducts} size="full">
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader textAlign="center" fontSize="2xl">{department} ({productCount} products)</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Flex justify="flex-end" mb={4}>
                                    <Select
                                        value={sortOption}
                                        onChange={handleSortChange}
                                        bg="white"
                                        borderColor="gray.300"
                                        borderRadius="md"
                                        focusBorderColor="teal.500"
                                        _hover={{ borderColor: "gray.400" }}
                                        _focus={{ boxShadow: "outline" }}
                                        width="200px"
                                    >
                                        <option value="price">Sort by Price</option>
                                        <option value="product_type">Sort by Product Type</option>
                                    </Select>
                                </Flex>
                                <SimpleGrid columns={[1, null, 4]} spacing="40px">
                                    {sortedProducts.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            handleImageError={handleImageError}
                                        />
                                    ))}
                                </SimpleGrid>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Box>
            </Collapse>
        </Box>
    );
};

export default SectionCard;
