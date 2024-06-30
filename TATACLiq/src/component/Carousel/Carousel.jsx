import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Image } from '@chakra-ui/react';
import Carousel1 from '../../assets/images/Carousel1.png'
import Carousel2 from '../../assets/images/Carousel2.png'
import Carousel3 from '../../assets/images/Carousel3.png'
import Carousel4 from '../../assets/images/Carousel4.png'
import Carousel5 from '../../assets/images/Carousel5.png'
import Carousel6 from '../../assets/images/Carousel6.png'
import Carousel7 from '../../assets/images/Carousel7.png'
import './Carousel.css'; // Import your custom CSS file

const settings = {
  showThumbs: false,
  fade: true,
  infiniteLoop: true,
  autoPlay: true,
  interval: 3000,
};

const Carousels = () => {
  return (
    <Box position="relative" zIndex={0}>
      <Carousel {...settings} className="custom-carousel">
        <Box>
          <Image
            src={Carousel1}
            alt="https://assets.tatacliq.com/medias/sys_master/images/52171335532574.jpg"
          />
        </Box>
        <Box>
          <Image
            src={Carousel2}
            alt="https://assets.tatacliq.com/medias/sys_master/images/52171335401502.jpg"
          />
        </Box>
        <Box>
          <Image
            src={Carousel3}
            alt="https://assets.tatacliq.com/medias/sys_master/images/52171335860254.jpg"
          />
        </Box>
        <Box>
          <Image
            src={Carousel4}
            alt="https://assets.tatacliq.com/medias/sys_master/images/52171335467038.jpg"
          />
        </Box>
        <Box>
          <Image
            src={Carousel5}
            alt="https://assets.tatacliq.com/medias/sys_master/images/52171335598110.jpg"
          />
        </Box>
        <Box>
          <Image
            src={Carousel7}
            alt="https://assets.tatacliq.com/medias/sys_master/images/52171335925790.jpg"
          />
        </Box>
        <Box>
          <Image
            src={Carousel6}
            alt="https://assets.tatacliq.com/medias/sys_master/images/52171335663646.jpg"
          />
        </Box>
      </Carousel>
    </Box>
  );
};

export default Carousels;
