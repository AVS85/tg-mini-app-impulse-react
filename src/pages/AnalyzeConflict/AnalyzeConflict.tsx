// import { List } from '@telegram-apps/telegram-ui';
import { Button } from '@/components/atoms';
import { Header } from '@/components/entity';
import { WelcomeBox } from '@/components/molecules';
import { Box } from '@mui/material';

const AnalyzeConflict = () => {
  return (
    <>
      <Header title="Анализ конфликта" />
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
          <WelcomeBox title="Анализ конфликтов позволит вам лучше понять собеседника и разобраться в возникающих разногласиях" />
          <Button title="Разобрать конфликт" backgroundType="filled" />
        </Box>
      </Box>
    </>
  );
};

export default AnalyzeConflict;
