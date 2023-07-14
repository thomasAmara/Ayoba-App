import { Box, Text, Stack, Button, Image } from '@chakra-ui/react';
import Money from '../Images/IMG_4442.jpg';
// import Author from '../Images/author.png';
import Glass from '../Images/IMG_4429.jpg';
import React from 'react';
import Tile from '../Images/IMG_4290.jpg';
import Partners from '../Images/IMG_4319.jpg';

function Insight() {
  // const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <div
      style={{
        backgroundColor: '#0161A2',
      }}
    >
      <Box
        maxWidth='1280px'
        margin='0 auto'
        display='flex'
        justifyContent='center'
        flexDirection='column'
        width='100%'
        pb='30px'
      >
        <Button
          colorScheme='telegram'
          fontSize='18px'
          borderRadius='8px'
          width='220px'
          height='50px'
          color='#FDB933'
          margin='0 auto'
          mt='40px'
          textTransform='uppercase'
          opacity='100%'
        >
          What Do you gain ?
        </Button>

        <Box mt='25px' pb='40px'>
          <Stack spacing={20}>
            <Box
              display='flex'
              // bg={isLargerThan768 ? '#44ED32' : '#907E'}
              p={['10px 20px', '6px 12px', '7px 25px']}
              flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
              justifyContent='space-between'
            >
              <Box pt='30px' maxWidth='450px'>
                <Text
                  fontWeight='600'
                  fontFamily='Nunito'
                  color='#FFF'
                  fontSize='32px'
                >
                  Access to key resources for your company growth
                </Text>
                <Text
                  mt='5px'
                  fontWeight='300'
                  fontFamily='Nunito'
                  color='#FFF'
                  fontSize='22px'
                >
                  As part of the Ayoba SME Accelerator Program 2023, you will
                  gain access to a wealth of resources designed to fuel your
                  company's growth. From intensive training modules to practical
                  tools and strategies, we provide you with everything you need
                  to scale your business effectively.
                </Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Image
                  borderRadius='10px'
                  maxWidth='500px'
                  width='100%'
                  src={Glass}
                />
              </Box>
            </Box>
            <Box
              display='flex'
              p={['10px 20px', '6px 12px', '7px 25px']}
              flexDirection={[
                'column-reverse',
                'column-reverse',
                'row-reverse',
                'row-reverse',
              ]}
              justifyContent='space-between'
            >
              <Box pt='30px' maxWidth='450px'>
                <Text
                  fontWeight='600'
                  color='#FFF'
                  fontFamily='Nunito'
                  fontSize='32px'
                >
                  Network with like-minded entrepreneurs
                </Text>
                <Text
                  mt='5px'
                  fontWeight='300'
                  color='#FFF'
                  fontFamily='Nunito'
                  fontSize='22px'
                >
                  Join a vibrant community of ambitious entrepreneurs who, like
                  you, are on a mission to transform their businesses. This
                  network offers a unique platform to share ideas, learn from
                  each other's experiences, and form valuable connections that
                  can open up new opportunities.
                </Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Image
                  maxWidth='500px'
                  borderRadius='10px'
                  width='100%'
                  src={Tile}
                />
              </Box>
            </Box>
            <Box
              display='flex'
              p={['10px 20px', '6px 12px', '7px 25px']}
              flexDirection={['column-reverse', 'column-reverse', 'row']}
              justifyContent='space-between'
            >
              <Box pt='30px' maxWidth='450px'>
                <Text
                  fontWeight='600'
                  color='#FFF'
                  fontFamily='Nunito'
                  fontSize='32px'
                >
                  Mentorship from Industry Experts
                </Text>
                <Text
                  mt='5px'
                  fontWeight='300'
                  color='#FFF'
                  fontFamily='Nunito'
                  fontSize='22px'
                >
                  Benefit from the wisdom and guidance of industry experts who
                  have been there and done that. Our mentors are seasoned
                  professionals who are eager to share their insights and help
                  you navigate the challenges of growing a business. Their
                  mentorship can be the difference between stumbling in the dark
                  and charting a clear path to success.
                </Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Image
                  maxWidth='500px'
                  width='100%'
                  borderRadius='10px'
                  src={Partners}
                />
              </Box>
            </Box>
            <Box
              display='flex'
              p={['10px 20px', '6px 12px', '7px 25px']}
              flexDirection={[
                'column-reverse',
                'column-reverse',
                'row-reverse',
                'row-reverse',
              ]}
              justifyContent='space-between'
            >
              <Box maxWidth='450px'>
                <Text
                  fontWeight='600'
                  color='#FFF'
                  fontFamily='Nunito'
                  fontSize='32px'
                >
                  Investment and fund-raising opportunities
                </Text>
                <Text
                  mt='5px'
                  fontWeight='300'
                  color='#FFF'
                  fontFamily='Nunito'
                  fontSize='22px'
                >
                  The Ayoba SME Accelerator Program 2023 also opens up avenues
                  for investment and fundraising. With potential investors
                  keeping a close eye on our program, this could be your chance
                  to secure the funding you need to take your business to the
                  next level.
                </Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Image
                  maxWidth='500px'
                  width='100%'
                  borderRadius='10px'
                  src={Money}
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default Insight;
