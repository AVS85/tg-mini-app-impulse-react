import { appUI } from '@/common/colors';
import {
  Button,
  ButtonIcon,
  ChatMessageTextBox,
  // ContentBox,
  Input,
  ScrollBox,
  // Text,
} from '@/components/atoms';
import { Basket, Save } from '@/components/icons';
// import { WelcomeBox } from '@/components/molecules';
import { Box } from '@mui/material';
import { Fragment } from 'react';

import { mockChat } from './mockChat';

const AnalyzeMessagesChatPage = () => {
  // const [isDisplayWelcomeLayer, setIsDisplayWelcomeLayer] = useState(true);

  // const handleClickStart = () => setIsDisplayWelcomeLayer((bool) => !bool);
  // const handleCreateConflict = () => {};
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
      }}
    >
      {/* CHAT */}
      <ScrollBox>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {mockChat.map((el, index) => {
            return (
              <Fragment key={index}>
                <ChatMessageTextBox value={el.partyB} party="PARTY_B" />
                <ChatMessageTextBox value={el.partyA} party="PARTY_A" />
              </Fragment>
            );
          })}
        </Box>
      </ScrollBox>

      {/* CONTROL */}
      <Box
        sx={{
          // border: '1px solid red',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '20px',
        }}
      >
        <Box sx={{ paddingX: '12px' }}>
          <Input fullWidth />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Button
            // sxProps={{ backgroundColor: appUI.colors.mainBlue }}
            backgroundType="filled"
            title="Анализ"
          />
          {/* <ButtonIcon Icon={Basket} />
          <ButtonIcon Icon={Save} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyzeMessagesChatPage;
