import { Text, Box, Button } from '@chakra-ui/react';
import React from 'react';
import '../../src/acc.css';
import { useMediaQuery } from '@chakra-ui/react';

function Accelerator() {
  const [isLessThan525] = useMediaQuery('(max-width: 525px)');
  return (
    <div
      className='accleratorContainer'
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
        paddingBottom: '50px',
      }}
    >
      <Box maxWidth='1280px' pt='20px' margin='0 auto' width='100%' pb='10px'>
        <Box
          color='#222'
          width='100%'
          fontFamily='Inter'
          maxWidth='600px'
          display='flex'
          alignItems={['center', 'flex-start', 'flex-start']}
          flexDirection='column'
          //   pb='40px'
          p={['20px 40px', '20px 35px']}
        >
          <Text
            fontWeight='400'
            fontFamily='Inter'
            lineHeight='30px'
            fontSize='20px'
          >
            At Ayoba, we recognize the vital role that SMEs play in driving the
            growth and development of the Nigerian economy. With this in mind,
            we have established an exceptional prog ram aimed at empowering and
            propelling businesses towards success.
          </Text>
          <Text
            mt='10px'
            fontWeight='400'
            fontFamily='Inter'
            lineHeight='30px'
            fontSize='20px'
          >
            Our primary objective is to create an environment where SMEs can
            thrive by surrounding them with the best mentors and an unparalleled
            network of corporate partners, investors, and alumni. Our workshops
            and curated resources will equip you with the knowledge and skills
            necessary to navigate challenges, make informed decisions, and
            achieve sustainable success. Connect and learn from like-minded
            peers through networking events and community-building initiatives.
          </Text>
          <Text
            mt='10px'
            fontWeight='400'
            fontFamily='Inter'
            lineHeight='30px'
            fontSize='20px'
          >
            Join Ayoba's SME Accelerator now and embark on a transformative
            journey towards success.
          </Text>
          <Button
            mt={isLessThan525 ? '20px' : '90px'}
            width={['260px', '350px', '400px']}
            height='60px'
            // margin='0 auto'
            // margin={isLessThan525 ? '0 auto' : '40px 0px'}
            // color={isLessThan525 ? 'green' : 'yellow.200'}
            colorScheme='facebook'
          >
            Join the Accelerator Program
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Accelerator;
