import { TextField } from '@mui/material';

interface InputPropsI {
  id?: string;
  label?: string;
  placeholder?: string;
  variant?: 'outlined';
  fullWidth: boolean;
}

const Input = (props: InputPropsI) => {
  const { id, label, fullWidth, variant = 'outlined', placeholder } = props;
  return (
    <TextField
      id={id}
      fullWidth={fullWidth}
      label={label}
      placeholder={placeholder}
      variant={variant}
    />
  );
};

export default Input;
