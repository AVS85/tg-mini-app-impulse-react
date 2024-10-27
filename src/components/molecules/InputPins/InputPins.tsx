import React, { useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const InputPins: React.FC = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = event.target;
    console.log({ value });
    // Проверка, что введено только одно число
    if (value.length <= 1) {
      formik.setFieldValue(`pinCode[${index}]`, value);

      // Устанавливаем фокус на следующее поле, если есть введенное значение
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      event.target.value = ''; // Если введено не число, очищаем поле
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      pinCode: ['', '', '', ''],
      isReadyPincode: false,
      isAgreeTermOfServices: false,
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email('Enter the correct email address')
        .required('Email is required')
        .max(100, 'Email must be at most 100 characters'),
    }),
    onSubmit: (values, actions) => {
      // handleSubmit(values, actions);
      // TODO пофиксить повторные отпправки
      // authStore.setLogin(values.email);
      // if (isLogout) createUser();
      // if (isSignUp || isSignIn) otpValidate(values.pinCode.join(''));
    },
  });

  useEffect(() => {
    console.log({ ...formik.values });
  }, [formik.values]);

  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      {[0, 1, 2, 3].map((index) => (
        <Box key={index}>
          <TextField
            inputRef={(el) => (inputRefs.current[index] = el)}
            onChange={(event) => handleChange(event, index)}
            value={formik.values.pinCode[index]}
            slotProps={{
              input: {
                style: { textAlign: 'center', width: '54px' },
                type: 'text',
                inputMode: 'numeric',
              },
            }}
            variant="outlined"
          />
        </Box>
      ))}
    </Box>
  );
};

export default InputPins;
