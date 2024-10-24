import { Button, Text } from '@/components/atoms';
import { Box } from '@mui/material';
import ProfileStatistic from './ProfileStatistic';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
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
            <Button
              title="Выбрать план"
              backgroundType="filled"
              onClick={() => navigate('/subscription')}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
