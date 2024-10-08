import { ChatMessageDateBox, ChatMessageTextBox } from '@/components/atoms';
import { Header } from '@/components/entity';
import { Box } from '@mui/material';

import { mockChat } from './mockChat';

const Chat = () => {
  return (
    // <List style={listStyle}>
    <Box>
      <Header title="Чат и ИИмпульсом" />

      <Box
        component="section"
        sx={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          padding: '20px',
          alignItems: 'center',
        }}
      >
        <ChatMessageDateBox value="Понедельник 21.07.2024" />
        {mockChat.map((el) => {
          return (
            <>
              <ChatMessageTextBox value={el.partyB} party="PARTY_B" />
              <ChatMessageTextBox value={el.partyA} party="PARTY_A" />
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default Chat;
