import { RouterPathEnum } from '@/components/App';
import { ScrollBox } from '@/components/atoms';
import { useStores } from '@/store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { authStore } = useStores();
  const [signUpStep, setSignUpStep] = useState<'STEP1' | 'STEP2'>('STEP1');

  const handleClickSendPersonData = async () => {
    /** отправка данных */
    /** если успех показываем ввод pin */
    await authStore.checkLogin('');
    setSignUpStep('STEP2');
  };

  const handleClickSendPin = async () => {
    /** отправка pin */
    /** если успех делаем переход в чат */
    navigate(RouterPathEnum.CHAT);
  };

  const handleClickContinueWithoutRegistration = () => {
    /** переход в чат без регистрации */
    navigate(RouterPathEnum.CHAT);
  };

  return (
    <ScrollBox
      sxProps={{
        // border: '1px solid red',
        paddingY: '20px',
        justifyContent: 'center',
      }}
    >
      {signUpStep === 'STEP1' && (
        <SignUpStep1
          onClickSendPersonalData={handleClickSendPersonData}
          onClickContinueWithoutRegistration={
            handleClickContinueWithoutRegistration
          }
        />
      )}
      {signUpStep === 'STEP2' && (
        <SignUpStep2 onClickSendPin={handleClickSendPin} />
      )}
    </ScrollBox>
  );
};

export default SignUpPage;
