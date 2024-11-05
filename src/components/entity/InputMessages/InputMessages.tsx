import { Box, SvgIcon } from '@mui/material';
import { ButtonIcon, Input } from '@/components/atoms';
import MicIcon from '@mui/icons-material/Mic';
import { PostOutline } from '@/components/icons';

interface InputMessagesI {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitText?: () => void;
}

const CustomMicIcon = () => (
  <SvgIcon>
    <MicIcon sx={{ color: '#1E2F57' }} />
  </SvgIcon>
);

const InputMessages = (props: InputMessagesI) => {
  const { onChange, onSubmitText } = props;
  return (
    <Box
      sx={{
        // border: '1px solid red',
        // margin: '25px',
        boxShadow: '-4px -4px 8.2px 0px #FFFFFF, 3px 3px 10.9px 0px #C8CFDD',
        borderRadius: '25px',
        padding: '13px',
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
      }}
    >
      <Input
        id="1"
        fullWidth
        placeholder="Введите сообщение"
        onChange={onChange}
        multiline
      />
      <ButtonIcon Icon={CustomMicIcon} type="round" disabled />
      <ButtonIcon
        Icon={PostOutline}
        iconProps={{ width: '20px' }}
        type="round"
        onClick={onSubmitText}
      />
    </Box>
  );
};

export default InputMessages;
