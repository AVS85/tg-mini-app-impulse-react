import { Button, SvgIconProps } from '@mui/material';
import { Text } from '@/components/atoms';

interface ButtonIconPropsI {
  Icon: React.FC<SvgIconProps>; //JSX.Element
  type?: 'round' | 'square';
  backgroundType?: 'transparent' | 'filled';
  title?: string | any;
  // titlePosition?: 'bottom' | 'left'
  enableBoxShadow?: boolean;
}

const ButtonIcon = (props: ButtonIconPropsI) => {
  const {
    Icon,
    type = 'square',
    backgroundType,
    title,
    enableBoxShadow,
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
      sx={{
        backgroundColor: backgroundColor,
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

        '&:hover': {
          backgroundColor: backgroundColor,
        },
        // boxShadow: '2px 2px 10px 0px #A8B7D5, -2px -2px 4.3px 0px #FFFFFF',
      }}
    >
      <Icon height="24px" />
      {isTitleExist && <Text.subtitle>{title}</Text.subtitle>}
    </Button>
  );
};

export default ButtonIcon;
