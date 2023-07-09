import { ErrorMessage, useField } from 'formik';
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Box,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';

const CustomInput = (
  { label, LeftElement, RightElement, setFieldValue, maxLength, ...props },
  ref
) => {
  const [field] = useField(props);
  const isNumber = (e) => {
    if (e.target.value.length <= parseInt(maxLength)) {
      setFieldValue(field.name, e.target.value);
    }
  };
  return (
    <>
      {setFieldValue ? (
        <Box width='100%'>
          {label && (
            <Box
              as='label'
              fontWeight='400'
              fontSize='16px'
              mb='3px'
              htmlFor='text'
            >
              {label}
            </Box>
          )}
          <InputGroup>
            {LeftElement && (
              <InputLeftElement
                pointerEvents='none'
                children={LeftElement}
                top='2px'
              />
            )}

            <Input
              {...field}
              {...props}
              height='45px'
              backgroundColor='#fff'
              color='black'
              type='number'
              pattern='[0-9]'
              autoComplete='true'
              ref={ref}
              onChange={(e) => {
                isNumber(e);
              }}
            />

            {RightElement && (
              <InputRightElement width='4.5rem'>
                {RightElement}
              </InputRightElement>
            )}
          </InputGroup>
          <ErrorMessage
            component='div'
            name={field.name}
            style={errorMessage}
          />
        </Box>
      ) : (
        <Box width='100%'>
          {label && (
            <Box as='label' fontSize='16px' mb='3px' htmlFor='text'>
              {label}
            </Box>
          )}{' '}
          <InputGroup>
            {LeftElement && (
              <InputLeftElement
                pointerEvents='none'
                children={LeftElement}
                top='2px'
              />
            )}
            <Input
              {...field}
              {...props}
              autoComplete='true'
              ref={ref}
              height='40px'
              //   backgroundColor={name === 'courseName' ? '#f3f4f9' : '#fff'}
              //   backgroundColor={
              //     props.name.startsWith('course') ? '#f3f4f9' : '#fff'
              //   }
              color='black'
            />
          </InputGroup>
        </Box>
      )}
    </>
  );
};

export default forwardRef(CustomInput);

const errorMessage = {
  color: 'red',
  position: 'absolute',
  fontSize: '10px',
};
