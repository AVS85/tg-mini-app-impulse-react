import { Button as ButtonMUI, SvgIconProps } from '@mui/material';

interface ButtonIconPropsI {
  icon?: React.FC<SvgIconProps>;
  type?: 'round' | 'square';
  backgroundType?: 'transparent' | 'filled';
  title?: string;
}

const Button = (props: ButtonIconPropsI) => {
  const { icon, type = 'square', backgroundType, title } = props;

  // const backgroundColor = (() => {
  //   if (backgroundType === 'filled') {
  //     return '#00A99A';
  //   } else {
  //     return 'transparent';
  //   }
  // })();

  // const borderRadius = (() => {
  //   if (type === 'round') {
  //     return '50%';
  //   } else {
  //     return '11px';
  //   }
  // })();

  return (
    <ButtonMUI
      variant="contained"
      color="primary"
      sx={{
        // borderRadius,
        width: 42,
        minWidth: 42,
        height: 42,
        minHeight: 42,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: backgroundColor,
        // '&:hover': {
        //   backgroundColor: backgroundColor,
        // },
        boxShadow: '4px 4px 14.9px -6px #A8B7D5, -3px -3px 5.3px 0px #FFFFFFB2',
      }}
    >
      {title}
    </ButtonMUI>
  );
};

export default Button;
