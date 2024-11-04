import { Box, SvgIcon } from '@mui/material';
import { Button, ButtonIcon, Input } from '@/components/atoms';
import MicIcon from '@mui/icons-material/Mic';

interface InputMessagesI {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitText: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        margin: '25px',
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
      <ButtonIcon Icon={CustomMicIcon} type="round" />
      <Box>
        <Button
          title="Анализ"
          backgroundType="filled"
          // disabled={isSubmitButtonDisabled}
          onClick={onSubmitText}
        />
      </Box>
    </Box>
  );
};

export default InputMessages;
