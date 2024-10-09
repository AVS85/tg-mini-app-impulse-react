'use client';

import { Box } from '@mui/material';
import { ButtonRound, Input } from '@/components/atoms';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const InputMessages = () => {
  return (
    <Box
      sx={{
        margin: '25px',
        boxShadow: '-4px -4px 8.2px 0px #FFFFFF, 3px 3px 10.9px 0px #C8CFDD',

        borderRadius: '25px',
        padding: '13px',

        display: 'flex',
        alignItems: 'center',
        gap: '9px',
      }}
    >
      <Input id="1" fullWidth placeholder="Введите сообщение" />
      <ButtonRound Icon={KeyboardVoiceIcon} />
    </Box>
  );
};

export default InputMessages;
