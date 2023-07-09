/* eslint-disable no-undef */
import { Box, Button, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Lady from '../Images/women_chopped_2bf54a3b3c 1.svg';
import Ayoba from '../Images/ayobaLogo.png';
import '../acc.css';
import { useMediaQuery } from '@chakra-ui/react';
import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';

function App() {
  const [isLessThan525] = useMediaQuery('(max-width: 525px)');
  const [isLessThan415] = useMediaQuery('(max-width: 415px)');

  return (
    <div className='mainContainer'>
      <Box
        maxWidth='1340px'
        display='flex'
        justifyContent='space-between'
        margin='0 auto'
        marginTop='60px'
        pt='40px'
        pb={['20px', '5px']}
        p={!isLessThan525 ? '20px' : '5px'}
      >
        <Box display={['none', 'flex']}>
          {/* {isLessThan525 ? display: 'none' : 'flex'} */}
          <Image src={Lady} />
        </Box>
        <Box
          display='flex'
          width={isLessThan525 ? '100%' : 'auto'}
          p={isLessThan525 ? '15px' : '10px'}
          flexDirection='column'
        >
          <Box display='flex' justifyContent='center'>
            <Text
              display='flex'
              fontSize='30px'
              fontFamily='Inter'
              fontWeight='500'
            >
              Join the {` `}{' '}
              <Text
                ml='4px'
                mr='4px'
                display={!isLessThan415 ? 'none' : 'flex'}
                color='#FDB933'
              >
                Ayoba
              </Text>
              <Image
                ml='5px'
                display={isLessThan415 ? 'none' : 'flex'}
                mr='5px'
                src={Ayoba}
              />
              {` `} family
            </Text>
          </Box>
          <Wrap
            mt='10px'
            pt='120px'
            mb='15px'
            direction={['column', 'column']}
            // justify={['center']}
            align={'center'}
            spacing='30px'
          >
            <WrapItem>
              <Button
                borderRadius='7px'
                width={['300px', '350px', '400px']}
                height='60px'
                colorScheme='facebook'
                fontSize='24px'
                fontFamily='Inter'
                fontWeight='500'
                display='flex'
                justifyContent='space-evenly'
                p='3px 15px'
              >
                <FaApple size={32} />
                Download for iOS
              </Button>
            </WrapItem>
            <WrapItem pb={['10px', '5px', '0px']}>
              <Button
                borderRadius='7px'
                width={['300px', '350px', '400px']}
                height='60px'
                colorScheme='facebook'
                fontSize='24px'
                fontFamily='Inter'
                fontWeight='500'
                display='flex'
                justifyContent='space-evenly'
                p='3px 15px'
              >
                <FaGooglePlay size={32} mr='5px' />
                Download for Android
              </Button>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </div>
  );
}

export default App;
