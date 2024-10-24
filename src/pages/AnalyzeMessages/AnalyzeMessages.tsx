import { Button, Input } from '@/components/atoms';
import { WelcomeBox } from '@/components/molecules';
import { Box } from '@mui/material';
import { useState } from 'react';

interface WelcomeLayerPropsI {
  onClick: () => void;
}

const WelcomeLayer = (props: WelcomeLayerPropsI) => {
  const { onClick } = props;
  return (
    <Box
      sx={{
        // border: '1px solid red',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
          <Button title="Анализ" backgroundType="filled" onClick={onClick} />
        </Box>
      </Box>
    </Box>
  );
};

const AnalyzeMessagesPage = () => {
  const [isDisplayWelcomeLayer, setIsDisplayWelcomeLayer] = useState(true);
  const handleClickStart = () => setIsDisplayWelcomeLayer((bool) => !bool);

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
        {isDisplayWelcomeLayer && <WelcomeLayer onClick={handleClickStart} />}
        {/* {!isDisplayWelcomeLayer && (
          <ConflictListLayer onClick={handleCreateConflict} />
        )} */}
      </Box>
    </>
  );
};

export default AnalyzeMessagesPage;
