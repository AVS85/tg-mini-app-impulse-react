import { Button } from '@/components/atoms';
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
          <Button title="Выбрать план" backgroundType="filled" />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
