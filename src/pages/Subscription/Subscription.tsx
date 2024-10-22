import { Button, Text } from '@/components/atoms';
import { Header } from '@/components/entity';
import { Box } from '@mui/material';

const Subscription = () => {
  return (
    <>
      <Header title="Оформить подписку" />
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

export default Subscription;
