import { Fragment, useEffect } from 'react';
import { Box } from '@mui/material';
import { useStores } from '@/store';
import {
  Button,
  ChatMessageTextBox,
  Input,
  ScrollBox,
} from '@/components/atoms';

import { mockChat } from './mockChat';
import { observer } from 'mobx-react';
import { PartyEnum } from '@/types/chat';

const AnalyzeMessagesChatPage = () => {
  const { analyzeMessagesStore } = useStores();
  const { chatHistory } = analyzeMessagesStore;
  const handlePostMessage = async () => {
    analyzeMessagesStore.postMessage('Что делать');
  };

  // useEffect(() => {
  //   analyzeMessagesStore.addItemChatHistory({
  //     party: PartyEnum.PARTY_B,
  //     content: 'Привет Олег!',
  //   });
  // }, []);

  const isChatHistoryExist = Array.isArray(chatHistory) && chatHistory.length;

  return (
    <Box
      sx={{
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        flex: 1,
      }}
    >
      {/* CHAT */}
      <ScrollBox>
        <Box
          sx={{
            // border: '1px solid red',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
          }}
        >
          {isChatHistoryExist &&
            chatHistory.map((el, index) => {
              return (
                <Fragment key={index}>
                  <ChatMessageTextBox value={el.content} party={el.party} />
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
            onClick={handlePostMessage}
          />
          {/* <ButtonIcon Icon={Basket} />
          <ButtonIcon Icon={Save} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default observer(AnalyzeMessagesChatPage);
