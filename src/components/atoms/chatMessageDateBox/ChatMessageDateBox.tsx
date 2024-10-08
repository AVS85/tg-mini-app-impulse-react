// import { IconProps } from '@/components/typesComponents/icons';
// import React from 'react';

import { Box } from '@mui/material';

interface ChatMessageDateBoxPropsI {
  value: string;
}

const ChatMessageDateBox = (props: ChatMessageDateBoxPropsI) => {
  const { value } = props;
  return <Box>{value}</Box>;
};

export default ChatMessageDateBox;
