import { TextField } from '@mui/material';

interface InputPropsI {
  id?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  variant?: 'outlined';
  fullWidth?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Input = (props: InputPropsI) => {
  const {
    disabled,
    id,
    label,
    fullWidth,
    defaultValue,
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
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
};

export default Input;
