import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import axios from 'axios';
import Navbar from './component/Header/Header';
import Carousels from './component/Carousel/Carousel';
import Footer from './component/Footer/Footer';
import SectionCard from './component/SectionCard/SectionCard';
import BankingDiscountCard from './component/BankingDiscountCard/BankingDiscountCard';
import BlockbusterDealPage from './component/BlockBusterDealPage/BlockBusterDealPage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});

  useEffect(() => {
    axios.get('/product.json') 
      .then(response => {
        const data = response.data;
        if (Array.isArray(data.products)) {
          setProducts(data.products);
          console.log('Fetched products:', data.products);
          groupProducts(data.products);
        } else {
          console.error('Expected an array of products but received:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const groupProducts = (products) => {
    const grouped = products.reduce((acc, product) => {
      const { department } = product;
      if (department) {
        if (!acc[department]) {
          acc[department] = [];
        }
        acc[department].push(product);
      }
      return acc;
    }, {});
    setGroupedProducts(grouped);
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = '/path/to/placeholder-image.jpg'; // Fallback image
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <Navbar />
        <Carousels />
        <br/>
        <Flex overflowX="auto" css={{ 'scrollbarWidth': 'none', 'msOverflowStyle': 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Wrap spacing="20px" flexShrink="0">
            {Object.keys(groupedProducts).map(department => (
              <WrapItem key={department} width="145px">
                <SectionCard
                  department={department}
                  products={groupedProducts[department]}
                  handleImageError={handleImageError}
                />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
        <BankingDiscountCard />
        <BlockbusterDealPage />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
