import React, { useState } from 'react';
import { Box, Flex, Image, Center, Heading, Divider, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'; // Import necessary Chakra UI components
 // Import useHistory hook from react-router-dom

// Import your images here
import Image1 from '../../assets/images/deal1.jpg';
import Image2 from '../../assets/images/deal2.jpg';
import Image3 from '../../assets/images/deal3.jpg';
import Image4 from '../../assets/images/deal4.jpg';
import Image5 from '../../assets/images/deal5.jpg';
import Image6 from '../../assets/images/deal6.jpg';
import ErrorImage from '../../assets/images/Error-404-Page.gif'; // Import your error image
import { GRAY } from '../../constants/typography';

const BlockbusterDealPage = () => {
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    

    const handleImageClick = (image) => {
        // Redirect to error page
        setSelectedImage(image);
        setShowErrorModal(true);
         // Example URL for error page using react-router
    };

    const handleImageHover = (image) => {
        setSelectedImage(image);
    };

    const handleMouseLeave = () => {
        setSelectedImage(null); // Reset selected image on mouse leave
    };

    const handleCloseModal = () => {
        setShowErrorModal(false);
        setSelectedImage(null);
    };

    return (
        <Center mt={8}>
            <Box width="80%">
                <Heading as="h1" size="xl" textAlign="center" mb={4}>
                    Blockbuster Deals
                </Heading>
                <Divider mb={4} color={GRAY} />
                {/* Row 1 */}
                <Flex mb={4}>
                    <Box
                        flex="1"
                        mr={2}
                        p={2}
                        borderRadius="50px"
                        overflow="hidden"
                        boxShadow={selectedImage === Image1 ? 'md' : 'none'}
                        transition="box-shadow 0.2s ease-in-out"
                        onMouseEnter={() => handleImageHover(Image1)}
                        onMouseLeave={handleMouseLeave}
                        style={{ transform: selectedImage === Image1 ? 'scale(1.05)' : 'scale(1)' }}
                        onClick={handleImageClick} // Handle click to open error page
                    >
                        <Image src={Image1} alt="Deal 1" width="100%" borderRadius="md" />
                    </Box>
                    <Box
                        flex="1"
                        ml={2}
                        p={2}
                        borderRadius="50px"
                        overflow="hidden"
                        boxShadow={selectedImage === Image2 ? 'md' : 'none'}
                        transition="box-shadow 0.2s ease-in-out"
                        onMouseEnter={() => handleImageHover(Image2)}
                        onMouseLeave={handleMouseLeave}
                        style={{ transform: selectedImage === Image2 ? 'scale(1.05)' : 'scale(1)' }}
                        onClick={handleImageClick} // Handle click to open error page
                    >
                        <Image src={Image2} alt="Deal 2" width="100%" borderRadius="md" />
                    </Box>
                </Flex>

                {/* Row 2 */}
                <Flex mb={4}>
                    <Box
                        flex="1"
                        mr={2}
                        p={2}
                        borderRadius="50px"
                        overflow="hidden"
                        boxShadow={selectedImage === Image3 ? 'md' : 'none'}
                        transition="box-shadow 0.2s ease-in-out"
                        onMouseEnter={() => handleImageHover(Image3)}
                        onMouseLeave={handleMouseLeave}
                        style={{ transform: selectedImage === Image3 ? 'scale(1.05)' : 'scale(1)' }}
                        onClick={handleImageClick} // Handle click to open error page
                    >
                        <Image src={Image3} alt="Deal 3" width="100%" borderRadius="md" />
                    </Box>
                    <Box
                        flex="1"
                        ml={2}
                        p={2}
                        borderRadius="50px"
                        overflow="hidden"
                        boxShadow={selectedImage === Image4 ? 'md' : 'none'}
                        transition="box-shadow 0.2s ease-in-out"
                        onMouseEnter={() => handleImageHover(Image4)}
                        onMouseLeave={handleMouseLeave}
                        style={{ transform: selectedImage === Image4 ? 'scale(1.05)' : 'scale(1)' }}
                        onClick={handleImageClick} // Handle click to open error page
                    >
                        <Image src={Image4} alt="Deal 4" width="100%" borderRadius="md" />
                    </Box>
                </Flex>

                {/* Row 3 */}
                <Flex mb={4}>
                    <Box
                        flex="1"
                        mr={2}
                        p={2}
                        borderRadius="50px"
                        overflow="hidden"
                        boxShadow={selectedImage === Image5 ? 'md' : 'none'}
                        transition="box-shadow 0.2s ease-in-out"
                        onMouseEnter={() => handleImageHover(Image5)}
                        onMouseLeave={handleMouseLeave}
                        style={{ transform: selectedImage === Image5 ? 'scale(1.05)' : 'scale(1)' }}
                        onClick={handleImageClick} // Handle click to open error page
                    >
                        <Image src={Image5} alt="Deal 5" width="100%" borderRadius="md" />
                    </Box>
                    <Box
                        flex="1"
                        ml={2}
                        p={2}
                        borderRadius="50px"
                        overflow="hidden"
                        boxShadow={selectedImage === Image6 ? 'md' : 'none'}
                        transition="box-shadow 0.2s ease-in-out"
                        onMouseEnter={() => handleImageHover(Image6)}
                        onMouseLeave={handleMouseLeave}
                        style={{ transform: selectedImage === Image6 ? 'scale(1.05)' : 'scale(1)' }}
                        onClick={handleImageClick} // Handle click to open error page
                    >
                        <Image src={Image6} alt="Deal 6" width="100%" borderRadius="md" />
                    </Box>
                </Flex>
            </Box>
            <Modal isOpen={showErrorModal} onClose={handleCloseModal} size="full">
                <ModalOverlay />
                <ModalContent bg="#5a657a">
                    <ModalBody>
                        <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
                            <Image src={ErrorImage} alt="Error Image" maxWidth="100%" maxHeight="100%" />
                        </Box>
                    </ModalBody>
                    <ModalCloseButton color="white" />
                </ModalContent>
            </Modal>
        </Center>
    );
};

export default BlockbusterDealPage;
