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
  Select,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import CustomInput from './CustomeInput';
import * as Yup from 'yup';
import axios from 'axios';
import { States } from './StateArray';
import { useNavigate } from 'react-router-dom';

function RegisterModal({ isOpen, onClose }) {
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const phoneRegExp = /^([0](7|8|9){1})(0|1){1}[0-9]{8}$/;

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(4, 'Too Short!').required('Required'),
    lastName: Yup.string().min(4, 'Too Short!').required('Required'),
    phoneNo: Yup.string()
      .matches(phoneRegExp, 'Enter a Valid Nigeria Phone number')
      .required('Required'),
    businessName: Yup.string().required('Required'),
    businessEmail: Yup.string().email('Invalid email').required('Required'),
    city: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
  });

  let Url = 'https://ayoba-sme-accelerator.onrender.com/api/register';

  const getSubmit = async (values) => {
    setLoader(true);
    try {
      const response = await axios.post(Url, values, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 201) {
        // toast({
        //   position: 'top-right',
        //   title: 'Success',
        //   description:
        //     'Thank you for registration. A message was sent to your email',
        //   status: 'success',
        //   duration: 9000,
        //   isClosable: true,
        // });
        return navigate('/successMsg', { replace: true });
        // setLoader(false);
      } else {
        toast({
          position: 'top-right',
          title: 'Success',
          description: response.data.message,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        setLoader(false);
      }
      setLoader(false);
    } catch (error) {
      toast({
        position: 'top-right',
        title: 'Error.',
        description: error.response.data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setLoader(false);
    }
  };

  // const errorMessage = {
  //   color: 'red',
  //   position: 'absolute',
  //   fontSize: '10px',
  // };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalBody>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              gender: '',
              phoneNo: '',
              businessName: '',
              businessEmail: '',
              city: '',
              location: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={getSubmit}
          >
            {({ values, setValues, errors, handleChange }) => (
              <Form>
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
                        <CustomInput name='firstName' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text>Last Name</Text>
                        <CustomInput name='lastName' />
                      </Wrap>
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid minChildWidth='120px' mt='10px' spacing='10px'>
                    <Box>
                      <Wrap>
                        <Text>Gender</Text>
                        {/* <CustomSelect options={stateArray || []} /> */}
                        <Select
                          h='40px'
                          width='100%'
                          bg='#fff'
                          borderColor='#E3E8EF'
                          isRequired
                          name='gender'
                          placeholder='Gender'
                          value={values.gender}
                          onChange={handleChange}
                        >
                          <>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                          </>
                        </Select>
                        {/* <CustomInput name='gender' placeholder='Male' /> */}
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text>Phone Number</Text>
                        <CustomInput
                          name={'phoneNo'}
                          // placeholder='08100000000'
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
                            // placeholder='Ayoba'
                          />
                        </Wrap>
                      </Box>
                      <Box>
                        <Wrap>
                          <Text>Business Email</Text>
                          <CustomInput
                            name='businessEmail'
                            // placeholder='Ragg@gmail.com'
                          />
                        </Wrap>
                      </Box>
                    </SimpleGrid>
                    <SimpleGrid minChildWidth='120px' mt='10px' spacing='10px'>
                      <Box>
                        <Wrap>
                          <Text>City</Text>
                          <CustomInput name='city' />
                        </Wrap>
                      </Box>
                      <Box>
                        <Wrap>
                          <Text>State</Text>
                          <Select
                            h='40px'
                            width='100%'
                            bg='#fff'
                            borderColor='#E3E8EF'
                            isRequired
                            name='location'
                            value={values.state}
                            onChange={handleChange}
                          >
                            <>
                              {States?.map((data) => (
                                <option key={data.id} value={data.name}>
                                  {data.name}
                                </option>
                              ))}
                            </>
                          </Select>
                          {/* <ErrorMessage
                            component='div'
                            name={values.name}
                            style={errorMessage}
                          /> */}
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
                    isLoading={loader}
                    borderRadius='8px'
                    colorScheme='facebook'
                    isDisabled={
                      Array.isArray(errors) ||
                      Object.values(errors).toString() !== ''
                    }
                    onClick={() => getSubmit(values)}
                    // isDisabled={Formik.values === null}
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
