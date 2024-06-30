import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const ProductCard = ({ product, handleImageError }) => {
  return (
    <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box height="200px" width="100%" overflow="hidden">
        <Image 
          src={product.img} 
          alt={product.name} 
          height="100%" 
          width="100%" 
          objectFit="cover" 
          onError={handleImageError}
          fallbackSrc="/path/to/placeholder-image.jpg" 
        />
      </Box>
      <Box p={4}>
        <Text fontSize="lg" fontWeight="bold">{product.name}</Text>
        <Text mt={2}>${product.price}</Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
