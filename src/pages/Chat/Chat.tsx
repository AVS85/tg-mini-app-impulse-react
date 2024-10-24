import { ChatMessageDateBox, ChatMessageTextBox } from '@/components/atoms';
import { Header, InputMessages } from '@/components/entity';
import { Box } from '@mui/material';

import { mockChat } from './mockChat';
import { Input } from '@/components/atoms';
import { Fragment } from 'react/jsx-runtime';

const Chat = () => {
  return (
    // <List style={listStyle}>
    <Box
      sx={{
        // backgroundColor: 'red',
        // border: '2px solid green',
        display: 'flex',
        // gap: '20px',
        flexDirection: 'column',
        // padding: '20px',
        // alignItems: 'center',
        // overflowY: 'scroll',
        // // height: '100%',
        // flexGrow: 1,
        flex: 1,
        // height: '100%',
        // overflow: 'hidden',
      }}
    >
      <Header title="Чат с ИИмпульсом" />

      <Box
        component="section"
        sx={{
          // border: '2px solid green',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          alignItems: 'center',
          overflowY: 'scroll',
          // flexGrow: 1,
          flex: 1,
          // maxHeight: '100%',
          // height: '100%',
        }}
      >
        <ChatMessageDateBox value="Понедельник 21.07.2024" />
        {mockChat.map((el, index) => {
          return (
            <Fragment key={index}>
              <ChatMessageTextBox value={el.partyB} party="PARTY_B" />
              <ChatMessageTextBox value={el.partyA} party="PARTY_A" />
            </Fragment>
          );
        })}
      </Box>
      <InputMessages />
    </Box>
  );
};

export default Chat;
