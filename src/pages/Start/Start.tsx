import { useEffect } from 'react';
import { Aimpulse, ButtonMainOutline } from '@/components/icons';
import { Box } from '@mui/material';
import { Text } from '@/components/atoms';
import { useNavigate } from 'react-router-dom';
import { useStores } from '@/store';
import { AuthStepperEnum } from '@/store/auth';

const StartPage = () => {
  // console.log('[AuthProvider] Redirect...');
  const { authStore } = useStores();
  const { authStatus } = authStore;

  const navigate = useNavigate();

  const isLogged = authStatus === AuthStepperEnum.LOGGED;

  // const isLogged = false;
  // const isLogged = true;

  useEffect(() => {
    setTimeout(() => {
      isLogged ? navigate('/chat') : navigate('/signUp');
    }, 2000);
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
            <Text.body>Скачивание данных 24%</Text.body>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StartPage;
