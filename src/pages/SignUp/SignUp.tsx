// import { List } from '@telegram-apps/telegram-ui';
import { appUI } from '@/common/colors';
import { RouterPathEnum } from '@/components/App';
import {
  Button,
  ButtonIcon,
  ContentBox,
  Input,
  ScrollBox,
  Text,
} from '@/components/atoms';
import { Plus } from '@/components/icons';
import { InputPins, WelcomeBox } from '@/components/molecules';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignUpStep1PropsI {
  onClick: () => void;
}
interface SignUpStep2PropsI {
  onClick: () => void;
}

const SignUpStep1 = (props: SignUpStep1PropsI) => {
  const { onClick } = props;

  const handleClickContinueWithoutRegistration = () => {
    console.log('handleClickContinueWithoutRegistration...');
  };

  return (
    <Box
      sx={{
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        overflow: 'auto',
        width: '100%',
      }}
    >
      <WelcomeBox
        title="Добро пожаловать"
        subtitle="Зарегистрируйтесь, чтобы начать полноценное общение с импульсом"
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '340px',
        }}
      >
        <Input placeholder="Электронная почта" />
        <Input placeholder="Имя" />
        <Input placeholder="Фамилия" />
        <Input placeholder="Дата рождения дд/мм/гг" />
      </Box>
      <Button
        title="Зарегистрироваться"
        backgroundType="filled"
        onClick={onClick}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <Text.h2
          color={appUI.colors.mono[400]}
          onClick={handleClickContinueWithoutRegistration}
          sxProps={{ cursor: 'pointer', userSelect: 'none' }}
        >
          Продолжить без регистрации
        </Text.h2>
        <Text.subtitle color={appUI.colors.mono[300]}>
          Большая часть функций будет ограничена
        </Text.subtitle>
      </Box>
    </Box>
  );
};

const SignUpStep2 = (props: SignUpStep2PropsI) => {
  const { onClick } = props;

  const handleClickContinueWithoutRegistration = () => {
    console.log('handleClickContinueWithoutRegistration...');
  };

  return (
    <Box
      sx={{
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '35px',
        overflow: 'auto',
        width: '100%',
      }}
    >
      <WelcomeBox
        title="Последний шаг"
        subtitle="Введите пятизначный код, который мы отправили вам на почту"
      />
      <InputPins />
      <Button title="Отправить" backgroundType="filled" onClick={onClick} />
    </Box>
  );
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUpStep, setSignUpStep] = useState<'STEP1' | 'STEP2'>('STEP1');

  const handleClickSendPersonData = () => {
    /** отправка данных */
    /** если успех показываем ввод pin */
    setSignUpStep('STEP2');
  };

  const handleClickSendPin = () => {
    /** отправка pin */
    /** если успех делаем переход в чат */
    navigate(RouterPathEnum.CHAT);
  };

  return (
    <ScrollBox
      sxProps={{
        // border: '1px solid red',
        paddingY: '20px',
      }}
    >
      {signUpStep === 'STEP1' && (
        <SignUpStep1 onClick={handleClickSendPersonData} />
      )}
      {signUpStep === 'STEP2' && <SignUpStep2 onClick={handleClickSendPin} />}
    </ScrollBox>
  );
};

export default SignUpPage;
