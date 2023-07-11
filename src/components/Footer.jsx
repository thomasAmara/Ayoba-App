import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import AyobaWhite from '../Images/ayobaWhite.png';
import Instagram from '../Images/instagram.svg';
import Facebook from '../Images/facebook.svg';
import Twitter from '../Images/twitter.svg';
import LinkedIn from '../Images/linkedin.svg';
import Tiktok from '../Images/tiktok.svg';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const redirectPage = () => {
    navigate('/backend');
  };

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
          <Image cursor='pointer' src={Facebook} />
          <Image cursor='pointer' src={Instagram} />
          <Image cursor='pointer' src={Twitter} />
          <Image cursor='pointer' src={LinkedIn} />
          <Image cursor='pointer' src={Tiktok} />
        </Box>
        <Box>
          <Box
            display='flex'
            flexDirection='column'
            mb='10px'
            alignItems='center'
          >
            <Text
              fontSize='20px'
              fontWeight='600'
              color='#FFF'
              fontFamily='Nunito'
            >
              Get Started
            </Text>
          </Box>

          <Button
            mt='10px'
            width={['280px', '200px']}
            height='72px'
            color='#0161A2'
            onClick={() => redirectPage()}
          >
            Register
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
