import { Box, SvgIcon } from '@mui/material';
import { ButtonIcon, Input } from '@/components/atoms';
import MicIcon from '@mui/icons-material/Mic';

const CustomMicIcon = () => (
  <SvgIcon>
    <MicIcon sx={{ color: '#1E2F57' }} />
  </SvgIcon>
);

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
      <ButtonIcon Icon={CustomMicIcon} type="round" />
    </Box>
  );
};

export default InputMessages;
