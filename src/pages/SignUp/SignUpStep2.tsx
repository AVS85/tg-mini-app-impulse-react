import { Button } from '@/components/atoms';
import { InputPins, WelcomeBox } from '@/components/molecules';
import { Box } from '@mui/material';

interface SignUpStep2PropsI {
  onClickSendPin: () => void;
}

const SignUpStep2 = (props: SignUpStep2PropsI) => {
  const { onClickSendPin } = props;

  return (
    <Box
      sx={{
        // border: '1px solid red',
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
      <Button
        title="Отправить"
        backgroundType="filled"
        onClick={onClickSendPin}
      />
    </Box>
  );
};

export default SignUpStep2;
