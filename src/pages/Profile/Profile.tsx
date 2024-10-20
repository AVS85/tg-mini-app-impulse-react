import { Button, Text } from '@/components/atoms';
import { Header } from '@/components/entity';
import { ProfileFilledIcon } from '@/components/icons';
import { Box } from '@mui/material';

const Profile = () => {
  return (
    <>
      <Header title="Мой профиль" />
      <Box
        sx={{
          // border: '1px solid red',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            overflow: 'auto',
          }}
        >
          <ProfileFilledIcon sx={{ fontSize: '60px' }} />
          <Box>Имя Фамилия</Box>
          <Box>Почта@email.ru</Box>
          <Box>30 лет</Box>
          <Box>Настроение</Box>
          <Box>Детали подписки</Box>

          <Text.h1>[h1] 123131313</Text.h1>
          <Text.h1 bold> [h1 bold] 123131313</Text.h1>

          <Text.h2>123131313</Text.h2>
          <Text.h2 bold>123131313</Text.h2>

          <Text.body>[Text.body] 123131313</Text.body>
          <Text.body bold>[Text.body] 123131313</Text.body>

          <Text.subtitle>[Text.subtitle] 123131313</Text.subtitle>
          <Text.subtitle bold>[Text.subtitle] 123131313</Text.subtitle>

          <Button title="Выбрать план" backgroundType="filled" />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
