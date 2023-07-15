import { Box, Text, Image, Divider, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Ayoba from '../Images/ayoba.png';
import '../acc.css';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Mail from '../Images/emailIcon.svg';

export default function SuccessMessage() {
  const [isLessThan525] = useMediaQuery('(max-width: 525px)');

  return (
    <div className='successContainer'>
      <Box p='10px 20px'>
        <Image src={Ayoba} alt='ayoba' />
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Box width='60%' maxWidth='760px'>
          <Box
            display='flex'
            p='25px 5px'
            textAlign='center'
            flexDirection='column'
            justifyContent='center'
          >
            <Box display='flex' mb='15px' justifyContent='center'>
              <Image src={Mail} alt='mail' />
            </Box>

            <Text
              fontSize={['34px', '64px']}
              color='#0161A2'
              fontFamily='Nunito'
              fontWeight='700'
            >
              Thank You
            </Text>
          </Box>
          <Box
            display='flex'
            p='15px 5px'
            alignItems='center'
            textAlign='center'
            justifyContent='center'
          >
            <Text
              fontSize={['16px', '32px']}
              fontFamily='Nunito'
              fontWeight='500'
            >
              Your registration is successful. A message has been sent to your
              Email from us.
            </Text>
          </Box>
        </Box>

        <Divider
          mt='10%'
          orientation='horizontal'
          maxWidth='800px'
          width='100%'
          size='xl'
          border='2px'
          borderColor='#000'
        />

        <Box
          display='flex'
          width='100%'
          maxWidth='360px'
          justifyContent='space-between'
          flexDirection='row'
          p={isLessThan525 ? '20px 25px' : '25px'}
        >
          <Link to='https://www.facebook.com/AyobaMessaging/'>
            <FaFacebookSquare size={42} />
          </Link>
          <Link to='https://www.instagram.com/ayoba_messaging/'>
            <FaInstagram size={42} />
          </Link>
          <Link to='https://twitter.com/ayoba_me'>
            <FaTwitterSquare size={42} />
          </Link>
          <Link to='https://www.linkedin.com/company/ayoba-superapp/'>
            <FaLinkedin size={42} />
          </Link>
          <Link to='https://www.tiktok.com/@ayoba_me'>
            <FaTiktok size={42} />
          </Link>
        </Box>
      </Box>
    </div>
  );
}
