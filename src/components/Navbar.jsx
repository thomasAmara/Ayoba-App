import { Box, Button, Text, Image, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Logo from '../Images/ayoba_554e739428-2 1.svg';
import '../acc.css';
import RegisterModal from './RegisterModal';
import { useDisclosure } from '@chakra-ui/react';

function Navbar() {
  const [isLessThan765] = useMediaQuery('(min-width: 765px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBottom: '20px',
      }}
    >
      <Box
        maxWidth='1340px'
        margin=' 0 auto'
        width='100%'
        p='10px 20px'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Box>
          <Image src={Logo} alt='' />
        </Box>
        <Button
          height='45px'
          width='130px'
          borderRadius='5px'
          colorScheme='facebook'
          onClick={onOpen}
        >
          Apply now
        </Button>
      </Box>
      <div className='Hero'>
        <Box
          margin='0 auto'
          p={['20px', '10px', '10px 20px']}
          maxWidth='1280px'
          height={isLessThan765 ? '100vh' : null}
          width='100%'
        >
          <Box
            color='#FFF'
            pt={['5%', '7%', '7%', '8%']}
            mb={['10px', '20px', '30px', '40px']}
            width={['80%', '60%']}
          >
            <Text
              fontWeight='700'
              fontFamily='Nunito'
              fontSize={['40px', '50px', '64px']}
            >
              <Text as='span' fontFamily='Nunito' color='#FDB933'>
                Ayoba SME Accelerator
              </Text>{' '}
              Nigeria 2023
            </Text>
            <Text
              fontWeight='500'
              fontFamily='Inter'
              fontSize={['20px', '24px', '28px']}
            >
              Take your businesses to the next level with Ayoba
            </Text>
          </Box>
          <Button
            mt={['10px', '50px']}
            mb='20px'
            borderRadius='8px'
            width={['200px', '285px']}
            height='70px'
            colorScheme='facebook'
            onClick={onOpen}
            p={['10px 5px', '20px 10px']}
            fontSize={['24px', '32px']}
            fontFamily='Inter'
          >
            Apply Now
          </Button>
          <Box mt='20px' pb={isLessThan765 ? '0px' : '20px'}>
            <Text
              color='#FFF'
              fontFamily='Inter'
              fontWeight='600'
              fontSize={['18px', '20px', '20px']}
            >
              JOIN THE AYOBA 2023 SME ACCELERATOR PROGRAM 2023
            </Text>
          </Box>
        </Box>
      </div>
      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default Navbar;
