import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { RouterPathEnum } from '@/components/App';
import { ScrollBox } from '@/components/atoms';
import { useStores } from '@/store';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import { AuthStepperEnum } from '@/store/auth';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

export interface FormikValuesSignUpPageI {
  email: string;
}

const SignUpPage = () => {
  const [isDisplayStep1, setIsDisplayStep1] = useState(false);
  const [isDisplayStep2, setIsDisplayStep2] = useState(false);

  const navigate = useNavigate();
  const { authStore } = useStores();

  const { authStatus } = authStore;

  const formikSubmit = async (values: FormikValuesSignUpPageI) => {
    authStore.login();
    // await authStore.entrancePath(values.email);
  };

  const formik = useFormik<FormikValuesSignUpPageI>({
    initialValues: {
      email: 'seo.resait@ya.ru',
    },
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
          'Неверный формат email'
        )
        .required('Email обязателен'),
    }),
    onSubmit: (values) => formikSubmit(values),
  });

  const handleClickSendPersonData = async () => {
    /** отправка данных */
    /** если успех показываем ввод pin */
    formik.submitForm();
  };

  const handleClickSendPin = async () => {
    /** отправка pin */
    /** если успех делаем переход в чат */
    // navigate(RouterPathEnum.CHAT);
  };

  // const handleClickContinueWithoutRegistration = () => {
  //   /** переход в чат без регистрации */
  //   navigate(RouterPathEnum.CHAT);
  // };

  // useEffect(() => {
  //   console.log({ isValid: formik.isValid, email: formik.values.email });
  // }, [formik.values]);

  useEffect(() => {
    setIsDisplayStep1(
      [AuthStepperEnum.LOGOUT, AuthStepperEnum.PIN_REQUESTED].includes(
        authStatus
      )
    );
    setIsDisplayStep2(
      [
        AuthStepperEnum.PIN_REQUESTED,
        AuthStepperEnum.PIN_POST_EMAIL,
        AuthStepperEnum.PIN_POST,
      ].includes(authStatus)
    );
    if (authStatus === AuthStepperEnum.LOGGED) navigate(RouterPathEnum.CHAT);
  }, [authStatus]);

  return (
    <FormikProvider value={formik}>
      <ScrollBox
        sxProps={{
          // border: '1px solid red',
          paddingY: '20px',
          justifyContent: 'center',
        }}
      >
        {isDisplayStep1 && (
          <SignUpStep1
            onClickSendPersonalData={handleClickSendPersonData}
            // onClickContinueWithoutRegistration={
            //   handleClickContinueWithoutRegistration
            // }
          />
        )}
        {isDisplayStep2 && <SignUpStep2 onClickSendPin={handleClickSendPin} />}
      </ScrollBox>
    </FormikProvider>
  );
};

export default observer(SignUpPage);
