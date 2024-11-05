import { Button, SvgIconProps, SxProps } from '@mui/material';
import { Text } from '@/components/atoms';

interface ButtonIconPropsI {
  Icon: React.FC<SvgIconProps>; //JSX.Element
  type?: 'round' | 'square';
  backgroundType?: 'transparent' | 'filled';
  title?: string | any;
  // titlePosition?: 'bottom' | 'left'
  enableBoxShadow?: boolean;
  iconProps?: SvgIconProps;
  sxProps?: SxProps;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonIcon = (props: ButtonIconPropsI) => {
  const {
    Icon,
    type = 'square',
    backgroundType,
    title,
    // enableBoxShadow,
    iconProps,
    sxProps = {},
    onClick,
    disabled,
  } = props;

  const isTitleExist = Boolean(title);

  const backgroundColor = (() => {
    if (backgroundType === 'filled') {
      return '#00A99A';
    } else {
      return 'transparent';
    }
  })();

  const borderRadius = (() => {
    if (type === 'round') {
      return '50%';
    } else {
      return '11px';
    }
  })();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      sx={{
        backgroundColor: backgroundColor,
        textTransform: 'none',

        // border: 0,
        borderRadius,
        width: 42,
        minWidth: 42,
        height: 42,
        minHeight: 42,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', //TODO titlePosition
        gap: '4px', //TODO titlePosition
        boxShadow: '2px 2px 10px 0px #A8B7D5, -2px -2px 4.3px 0px #FFFFFF',

        '&:hover': {
          // border: '1px solid red',
          backgroundColor: backgroundColor,
          boxShadow: 'inherit',
        },
        '&:active': {
          backgroundColor: 'transparent',
        },
        ...sxProps,
      }}
    >
      <Icon {...iconProps} />
      {isTitleExist && <Text.subtitle>{title}</Text.subtitle>}
    </Button>
  );
};

export default ButtonIcon;
