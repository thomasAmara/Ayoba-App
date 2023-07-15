import { Box, Text, Image, Divider } from '@chakra-ui/react';
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

export default function SuccessMessage() {
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
            justifyContent='center'
          >
            <Text
              fontSize='64px'
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
            <Text fontSize='28px' fontFamily='Nunito' fontWeight='500'>
              Your registration is successful. A message has been sent to your
              Email from us.
            </Text>
          </Box>
        </Box>
        <Box>
          <Divider
            orientation='horizontal'
            colorScheme='facebook'
            variant='solid'
            size='xl'
          />
        </Box>

        <Box
          display='flex'
          width='100%'
          maxWidth='360px'
          justifyContent='space-between'
          flexDirection='row'
          pt='30px'
          pb='25px'
        >
          <FaFacebookSquare size={48} />
          <FaInstagram size={48} />
          <FaTwitterSquare size={48} />
          <FaLinkedin size={48} />
          <FaTiktok size={48} />
        </Box>
      </Box>
    </div>
  );
}
