import { ProfileFilledIcon } from '@/components/icons';
import { Box } from '@mui/material';
import { Text } from '@/components/atoms';
import { appUI } from '@/common/colors';
import ProfileTable from './ProfileTable';

const ProfileStatistic = () => {
  return (
    <Box
      sx={{
        // border: '1px solid grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '36px',
      }}
    >
      <Box
        sx={{
          // border: '1px solid red',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <ProfileFilledIcon sx={{ fontSize: '60px' }} />
        <Box>
          <Text.h1 bold>Имя Фамилия</Text.h1>
        </Box>
        <Box>
          <Text.subtitle>Почта@email.ru</Text.subtitle>
        </Box>
        <Box>
          <Text.body>30 лет</Text.body>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Text.body bold>Настроение</Text.body>
        <Box
          sx={{
            background: appUI.colors.gradient1,
            width: '20px',
            aspectRatio: '1 / 1',
            borderRadius: '50%',
          }}
        />
      </Box>

      <ProfileTable />
    </Box>
  );
};

export default ProfileStatistic;
