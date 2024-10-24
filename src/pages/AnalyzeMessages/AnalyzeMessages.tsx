import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { RouterPathEnum } from '@/components/App';
import { WelcomeBox } from '@/components/molecules';
import { Button, Input, ScrollBox } from '@/components/atoms';

// interface AnalyzeMessagesPropsI {
//   onClick: () => void;
// }

const AnalyzeMessagesPage = () => {
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate(RouterPathEnum.ANALYZE_MESSAGES_CHAT);
  };

  return (
    <Box
      sx={{
        border: '1px solid red',

        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        gap: '80px',
        overflow: 'auto',
        // width: '100%',
        flex: 1,
      }}
    >
      <WelcomeBox />
      <Box
        sx={{
          // border: '1px solid red',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          // paddingX: '20px',
          boxSizing: 'content-box',
          alignItems: 'center',
        }}
      >
        <Input fullWidth />
        <Box>
          <Button
            title="Анализ"
            backgroundType="filled"
            onClick={handleClickStart}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyzeMessagesPage;
