import { WelcomeBox } from '@/components/molecules';
import { Button } from '@/components/atoms';
import { Box } from '@mui/material';

const DiaryEmotions = () => {
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
            gap: '40px',
            overflow: 'auto',
          }}
        >
          <WelcomeBox title="Дневник эмоций позволяет вам следить за общим состоянием эмоционального фона и отслеживать прогресс" />
          <Button title="Добавить запись" backgroundType="filled" />
        </Box>
      </Box>
    </>
  );
};

export default DiaryEmotions;
