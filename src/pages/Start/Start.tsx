import { useEffect, useState } from 'react';
import { Aimpulse, ButtonMainOutline } from '@/components/icons';
import { Box } from '@mui/material';
import { Text } from '@/components/atoms';
import { useNavigate } from 'react-router-dom';
import { useStores } from '@/store';
import { AuthStepperEnum } from '@/store/auth';

const StartPage = () => {
  const { authStore } = useStores();
  const { authStatus } = authStore;
  const [preloadPercent, setPreloadPercent] = useState(0);

  const navigate = useNavigate();

  const isLogged = authStatus === AuthStepperEnum.LOGGED;

  const redirect = () => {
    setTimeout(() => {
      isLogged ? navigate('/chat') : navigate('/signUp');
    }, 0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPreloadPercent((num) => {
        if (num >= 100) {
          clearInterval(intervalId);
          redirect();
          return 100;
        }
        return num + 5;
      });
    }, 100);
  }, []);

  return (
    <>
      <Box
        sx={{
          // outline: '1px solid grey', //TODO delete
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          width: '100%',
        }}
      >
        <Box
          sx={{
            // border: '1px solid red',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10%',
          }}
        >
          <Box
            sx={{
              // border: '1px solid red',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ marginBottom: '75px' }}>
              <ButtonMainOutline width={'226px'} height={'226px'} />
            </Box>
            <Box sx={{ marginBottom: '32px' }}>
              <Aimpulse />
            </Box>
            <Text.body>Психологическая поддержка</Text.body>
            <Text.body>нового поколения</Text.body>
          </Box>

          <Box>
            <Text.body>{`Скачивание данных ${String(
              preloadPercent
            )}%`}</Text.body>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StartPage;
