import { Button, SvgIconProps } from '@mui/material';

interface ButtonIconPropsI {
  Icon: React.FC<SvgIconProps>;
  type?: 'round' | 'square';
  backgroundType?: 'transparent' | 'filled';
}

const ButtonIcon = (props: ButtonIconPropsI) => {
  const { Icon, type = 'square', backgroundType } = props;

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
      sx={{
        borderRadius,
        width: 42,
        minWidth: 42,
        height: 42,
        minHeight: 42,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: backgroundColor,
        '&:hover': {
          backgroundColor: backgroundColor,
        },
        boxShadow: '2px 2px 10px 0px #A8B7D5, -2px -2px 4.3px 0px #FFFFFF',
      }}
    >
      <Icon />
    </Button>
  );
};

export default ButtonIcon;
