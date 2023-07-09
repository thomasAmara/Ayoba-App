import React from 'react';
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
} from '@chakra-ui/react';
import { Formik, useFormik, Form, Field } from 'formik';
import CustomInput from './CustomeInput';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  businessEmail: Yup.string().email('Invalid email').required('Required'),
});

const getSubmit = (values) => {
  console.log(values);
  // createPost(values)
};

function RegisterModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalBody>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              gender: '',
              email: '',
              businessName: '',
              businessEmail: '',
              city: '',
              location: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={getSubmit}
          >
            {({ values, setValues, errors }) => (
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
                    >
                      Personal Information
                    </Text>
                    <Divider border='1px' width='80%' color='#0161A2' />
                  </Box>
                  <SimpleGrid minChildWidth='120px' spacing='10px'>
                    <Box>
                      <Wrap>
                        <Text>First Name</Text>
                        <CustomInput name='firstName' placeholder='Killian' />
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
                        <CustomInput name='gender' placeholder='Killian' />
                      </Wrap>
                    </Box>
                    <Box>
                      <Wrap>
                        <Text>Phone Number</Text>
                        <CustomInput name={'phoneNumber'} placeholder='Ragg' />
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
                    >
                      Business Information
                    </Text>
                    <Divider border='1px' width='80%' color='#0161A2' />
                  </Box>
                  <Box>
                    <SimpleGrid minChildWidth='120px' spacing='10px'>
                      <Box>
                        <Wrap>
                          <Text>Business Name</Text>
                          <CustomInput
                            name='businessName'
                            placeholder='Killian'
                          />
                        </Wrap>
                      </Box>
                      <Box>
                        <Wrap>
                          <Text>Business Email</Text>
                          <CustomInput
                            name='businessEmail'
                            placeholder='Ragg'
                          />
                        </Wrap>
                      </Box>
                    </SimpleGrid>
                    <SimpleGrid minChildWidth='120px' mt='10px' spacing='10px'>
                      <Box>
                        <Wrap>
                          <Text>City</Text>
                          <CustomInput name='city' placeholder='Killian' />
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
                <Box display='flex' mt='10px' justifyContent='flex-end'>
                  <Button
                    borderRadius='8px'
                    colorScheme='facebook'
                    onClick={() =>
                      // getSubmit(values)
                      {
                        console.log('values', values);
                      }
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
