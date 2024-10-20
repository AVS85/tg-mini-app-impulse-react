import { Button, Text } from '@/components/atoms';
import { Header } from '@/components/entity';
import { Box } from '@mui/material';
import ProfileStatistic from './ProfileStatistic';

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
            gap: '80px',
            overflow: 'auto',
          }}
        >
          <ProfileStatistic />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            <Text.h2 bold>Детали подписки</Text.h2>
            <Button title="Выбрать план" backgroundType="filled" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
