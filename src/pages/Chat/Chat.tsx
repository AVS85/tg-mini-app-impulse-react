import {
  ChatMessageDateBox,
  ChatMessageTextBox,
  ScrollBox,
} from '@/components/atoms';
import { InputMessages } from '@/components/entity';
import { Box } from '@mui/material';

import { mockChat } from './mockChat';
import { Input } from '@/components/atoms';
import { Fragment } from 'react/jsx-runtime';
import { appUI } from '@/common/colors';

const Chat = () => {
  return (
    <Box
      sx={{
        // border: '2px solid green',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ScrollBox>
        <ChatMessageDateBox value="Понедельник 21.07.2024" />
        {mockChat.map((el, index) => {
          return (
            <Fragment key={index}>
              <ChatMessageTextBox value={el.partyB} party="PARTY_B" />
              <ChatMessageTextBox value={el.partyA} party="PARTY_A" />
            </Fragment>
          );
        })}
      </ScrollBox>

      <InputMessages />
    </Box>
  );
};

export default Chat;
