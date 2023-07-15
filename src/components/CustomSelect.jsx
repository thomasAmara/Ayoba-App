import { ErrorMessage, useField } from 'formik';
import { Box, Select } from '@chakra-ui/react';
// import { errorMessage } from 'styles/commonStyles';

const CustomSelect = (
  { name, options, placeholder, disabled, label, value, ...rest },
  props
) => {
  const [field] = useField(props);
  const isArrayOfObject = (options) => {
    const checkOptions = options?.some((value) => {
      return typeof value == 'object';
    });
    return checkOptions;
  };

  return (
    <div>
      {label && (
        <Box as='label' fontSize='14px' mb='3px' htmlFor='text'>
          {label}
        </Box>
      )}
      <Select
        {...rest}
        placeholder={placeholder}
        onChange={field.onChange}
        name={name}
        value={value}
        disabled={disabled}
        _placeholder={{ color: '#D8D6DE' }}
        border='none'
        style={{
          background: disabled && '#fff',
          opacity: 'unset',
          border: '1px solid #D8D6DE',
        }}
      >
        {isArrayOfObject(options)
          ? options?.map((option, index) => {
              return (
                <option
                  title={index}
                  value={option.value}
                  key={option.id || index}
                  id={option.id}
                >
                  {option.title}
                </option>
              );
            })
          : options?.map((option, index) => {
              return (
                <option title={index} value={option} key={index}>
                  {option}
                </option>
              );
            })}
      </Select>

      {/* <div style={{ position: 'relative' }}>
        <ErrorMessage name={name} component='div' style={errorMessage} />
      </div> */}
    </div>
  );
};
export default CustomSelect;

// const errorMessage = {
//   color: "red",
//   position: "absolute",
//   fontSize: "11px",
// };
