import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  Stack,
  ModalBody,
  Button,
  SimpleGrid,
  Box,
  Text,
  Wrap,
  Divider,
  useToast,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import CustomInput from './CustomeInput';
import * as Yup from 'yup';
import axios from 'axios';

function RegisterModal({ isOpen, onClose }) {
  const [message, setMessage] = useState(null);

  const toast = useToast();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(4, 'Too Short!').required('Required'),
    lastName: Yup.string().min(4, 'Too Short!').required('Required'),
    businessName: Yup.string().required('Required'),
    businessEmail: Yup.string().email('Invalid email').required('Required'),
    city: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
  });

  let Url = 'https://ayoba-sme-accelerator.onrender.com/api/register';

  const getSubmit = async (values) => {
    try {
      const response = await axios.post(Url, values, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 201) {
        setMessage('Registration Successfull');
      }
      console.log('my data', response);
    } catch (error) {
      console.log(error);
      toast({
        position: 'top-right',
        title: 'Error.',
        description: error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalBody>
          <Formik
            initialValues={{
              name: '',
              // lastName: '',
              gender: '',
              phoneNo: '',
              businessName: '',
              email: '',
              age: 5,
              location: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={getSubmit}
          >
            {({ values, setValues, errors }) => (
              <Form>
                {message && (
                  <div style={{ fontSize: '20px', color: '#0B6624' }}>
                    {message}
                  </div>
                )}
                <Box>
                  <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    flexDirection='row'
                  >
                    <Text
                      fontWeight='500'
                      fontFamily='Inter'
                      color='#0161A2'
                      fontSize='14px'
                      mb='10px'
                      mt='10px'
                      textTransform='uppercase'
                    >
                      Personal Information
                    </Text>
                    <Divider border='1px' width='65%' color='#0161A2' />
                  </Box>
                  <SimpleGrid minChildWidth='120px' spacing='10px'>
                    <Box>
                      <Wrap>
                        <Text>First Name</Text>
                        <CustomInput name='name' placeholder='Killian' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text>Last Name</Text>
                        <CustomInput name='lastName' placeholder='Ragg' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid minChildWidth='120px' mt='10px' spacing='10px'>
                    <Box>
                      <Wrap>
                        <Text>Gender</Text>
                        <CustomInput name='gender' placeholder='Male' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text>Phone Number</Text>
                        <CustomInput
                          name={'phoneNo'}
                          placeholder='08100000000'
                          maxLength={11}
                        />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Box mt='15px'>
                  <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    flexDirection='row'
                  >
                    <Text
                      fontWeight='500'
                      fontFamily='Inter'
                      color='#0161A2'
                      fontSize='14px'
                      mb='10px'
                      mt='10px'
                      textTransform='uppercase'
                    >
                      Business Information
                    </Text>
                    <Divider border='1px' width='65%' color='#0161A2' />
                  </Box>
                  <Box>
                    <SimpleGrid minChildWidth='120px' spacing='10px'>
                      <Box>
                        <Wrap>
                          <Text>Business Name</Text>
                          <CustomInput
                            name='businessName'
                            placeholder='Ayoba'
                          />
                        </Wrap>
                      </Box>
                      <Box>
                        <Wrap>
                          <Text>Business Email</Text>
                          <CustomInput
                            name='email'
                            placeholder='Ragg@gmail.com'
                          />
                        </Wrap>
                      </Box>
                    </SimpleGrid>
                    <SimpleGrid minChildWidth='120px' mt='10px' spacing='10px'>
                      <Box>
                        <Wrap>
                          <Text>City</Text>
                          <CustomInput name='city' placeholder='Lagos' />
                        </Wrap>
                      </Box>
                      <Box>
                        <Wrap>
                          <Text>State</Text>
                          <CustomInput name='location' placeholder='Lagos' />
                        </Wrap>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Box>
                <Box
                  display='flex'
                  mt='15px'
                  mb='15px'
                  justifyContent='flex-end'
                >
                  <Button
                    borderRadius='8px'
                    colorScheme='facebook'
                    onClick={
                      () => getSubmit(values)
                      // {
                      //   console.log('values', values);
                      // }
                    }
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>

      <Stack></Stack>
    </Modal>
  );
}

export default RegisterModal;
