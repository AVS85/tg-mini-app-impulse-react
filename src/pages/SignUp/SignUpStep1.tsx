import { FormikProvider, useFormikContext } from 'formik';
import { Box } from '@mui/material';
import { useStores } from '@/store';
import { Button, Input } from '@/components/atoms';
import { WelcomeBox } from '@/components/molecules';
import { FormikValuesSignUpPageI } from './SignUp';
import { observer } from 'mobx-react';

interface SignUpStep1PropsI {
  onClickSendPersonalData: () => void;
  onClickContinueWithoutRegistration?: () => void;
}

const SignUpStep1 = (props: SignUpStep1PropsI) => {
  const { authStore } = useStores();
  const { inProgressEntrancePath } = authStore;

  const formikContext = useFormikContext<FormikValuesSignUpPageI>();
  const {
    onClickSendPersonalData,
    // onClickContinueWithoutRegistration
  } = props;

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    formikContext.setFieldValue('email', target.value);
  };
  const isSubmitButtonDisabled =
    !formikContext.isValid || inProgressEntrancePath;

  return (
    <FormikProvider value={formikContext}>
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
          <Input
            placeholder="Электронная почта"
            onChange={handleChangeEmail}
            defaultValue={formikContext.values.email}
          />
          {/* <Input placeholder="Имя" />
        <Input placeholder="Фамилия" />
        <Input placeholder="Дата рождения дд/мм/гг" /> */}
        </Box>
        <Button
          title="Зарегистрироваться"
          backgroundType="filled"
          onClick={onClickSendPersonalData}
          disabled={isSubmitButtonDisabled}
        />
        {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <Text.h2
          color={appUI.colors.mono[400]}
          onClick={onClickContinueWithoutRegistration}
          sxProps={{ cursor: 'pointer', userSelect: 'none' }}
        >
          Продолжить без регистрации
        </Text.h2>
        <Text.subtitle color={appUI.colors.mono[300]}>
          Большая часть функций будет ограничена
        </Text.subtitle>
      </Box> */}
      </Box>
    </FormikProvider>
  );
};

export default observer(SignUpStep1);
