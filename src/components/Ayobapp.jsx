/* eslint-disable no-undef */
import { Box, Button, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Lady from '../Images/women_chopped_2bf54a3b3c 1.svg';
import Ayoba from '../Images/ayobaLogo.png';
import '../acc.css';
import { useMediaQuery } from '@chakra-ui/react';

function App() {
  const [isLessThan525] = useMediaQuery('(max-width: 525px)');
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
        <Box display='flex' flexDirection='column'>
          <Text
            display='flex'
            fontSize='30px'
            fontFamily='Inter'
            fontWeight='500'
          >
            Join the {` `} <Image ml='5px' mr='5px' src={Ayoba} />
            {` `} family
          </Text>
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
              >
                Download For Ios
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                borderRadius='7px'
                width={['300px', '350px', '400px']}
                height='60px'
                colorScheme='facebook'
              >
                Download For Android
              </Button>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </div>
  );
}

export default App;
