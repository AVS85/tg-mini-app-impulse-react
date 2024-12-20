import { Button as ButtonMUI, SvgIconProps, SxProps } from '@mui/material';
import { Text } from '@/components/atoms';

interface ButtonPropsI {
  disabled?: boolean;
  icon?: React.FC<SvgIconProps>;
  type?: 'button' | 'submit' | 'reset';
  backgroundType?: 'transparent' | 'filled';
  title?: string;
  onClick?: () => void;
  sxProps?: SxProps;
  variant?: 'text' | 'contained' | 'outlined';
}

const Button = (props: ButtonPropsI) => {
  const {
    // icon,

    backgroundType,
    title,
    onClick,
    variant,
    sxProps,
    disabled,
    type,
  } = props;

  const backgroundColor = (() => {
    if (backgroundType === 'filled') {
      return '#00A99A';
    } else {
      return 'transparent';
    }
  })();

  // const borderRadius = (() => {
  //   if (type === 'round') {
  //     return '50%';
  //   } else {
  //     return '11px';
  //   }
  // })();

  return (
    <ButtonMUI
      disabled={disabled}
      variant={variant}
      color="primary"
      onClick={onClick}
      sx={{
        borderRadius: '11px',
        textTransform: 'none',
        height: 50,
        minHeight: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: backgroundColor,
        boxShadow: '4px 4px 14.9px -6px #A8B7D5, -3px -3px 5.3px 0px #FFFFFF',
        width: 'auto',
        '&:disabled': {
          opacity: '50%',
        },
        ...sxProps,
      }}
      type={type}
    >
      {title && (
        <Text.h2 bold color="#FFF">
          {title}
        </Text.h2>
      )}
    </ButtonMUI>
  );
};

export default Button;
