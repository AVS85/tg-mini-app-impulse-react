import { Fragment } from 'react';
import { observer } from 'mobx-react';
import { Box } from '@mui/material';
import { ChatMessageTextBox, ScrollBox } from '@/components/atoms';
import { ChatMessagesT } from '@/types/chat';

export interface ChatMessagesFeedI {
  listMessages: ChatMessagesT;
}

const ChatMessagesFeed = (props: ChatMessagesFeedI) => {
  const { listMessages } = props;
  const isChatHistoryExist = Array.isArray(listMessages) && listMessages.length;

  return (
    <ScrollBox>
      {/* <ChatMessageDateBox value="Понедельник 21.07.2024" /> */}
      <Box
        sx={{
          // border: '1px solid red',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'flex-end',
          gap: '20px',
          width: '100%',
          boxSizing: 'border-box',
          paddingX: '20px',
          // '& > :first-child': {
          //   backgroundColor: 'lightblue',
          //   margin: '20px 0 0 0',
          // },
          // '& > :last-child': {
          //   backgroundColor: 'lightblue',
          //   margin: '0 0 20px 0',
          // },
        }}
      >
        {isChatHistoryExist &&
          listMessages.map((el, index) => {
            return (
              <Fragment key={index}>
                <ChatMessageTextBox value={el.content} party={el.party} />
              </Fragment>
            );
          })}
      </Box>
    </ScrollBox>
  );
};

export default observer(ChatMessagesFeed);
