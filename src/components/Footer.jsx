import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import AyobaWhite from '../Images/ayobaWhite.png';
import Instagram from '../Images/instagram.svg';
import Facebook from '../Images/facebook.svg';
import Twitter from '../Images/twitter.svg';
import LinkedIn from '../Images/linkedin.svg';
// import Tiktok from '../Images/tiktok.svg';

function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#001F34',
      }}
    >
      <Box
        width='100%'
        maxWidth='1280px'
        margin='0 auto'
        p={['20px 15px', '10px 20px']}
        bg='#001F34'
        display='flex'
        flexDirection={['column', 'row', 'row']}
        justifyContent='space-between'
        alignItems='center'
        height='400px'
      >
        <Box>
          <Image src={AyobaWhite} alt='Ayoba' />
        </Box>
        <Box
          display='flex'
          maxWidth='300px'
          width='100%'
          justifyContent='space-evenly'
        >
          <Image src={Facebook} />
          <Image src={Instagram} />
          <Image src={Twitter} />
          <Image src={LinkedIn} />
        </Box>
        <Box>
          <Box
            display='flex'
            flexDirection='column'
            mb='10px'
            alignItems='center'
          >
            <Text fontSize='20px' color='#FFF' fontFamily='Nunito'>
              Get Started
            </Text>
          </Box>

          <Button
            mt='10px'
            width={['280px', '200px']}
            height='72px'
            color='#0161A2'
          >
            Register
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
