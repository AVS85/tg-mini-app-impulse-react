import { TextField } from '@mui/material';

interface InputPropsI {
  id?: string;
  label?: string;
  placeholder?: string;
  variant?: 'outlined';
  fullWidth?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputPropsI) => {
  const {
    id,
    label,
    fullWidth,
    variant = 'outlined',
    placeholder,
    onChange,
  } = props;
  return (
    <TextField
      id={id}
      fullWidth={fullWidth}
      label={label}
      placeholder={placeholder}
      variant={variant}
      onChange={onChange}
    />
  );
};

export default Input;
