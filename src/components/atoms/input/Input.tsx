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
  multiline?: boolean;
  value?: string;
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
    multiline,
    value,
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
      multiline={multiline}
      value={value}
    />
  );
};

export default Input;
