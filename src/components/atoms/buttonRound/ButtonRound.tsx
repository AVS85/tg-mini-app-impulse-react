import { SvgIconComponent } from '@mui/icons-material';
import { Button } from '@mui/material';

interface ButtonRoundPropsI {
  Icon: SvgIconComponent;
}

const ButtonRound = (props: ButtonRoundPropsI) => {
  const { Icon } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      // variant="contained" // Используйте 'contained' для кнопки с фоном
      // sx={{
      //   backgroundColor: 'green', // Установите зеленый фон
      //   '&:hover': {
      //     backgroundColor: 'darkgreen', // Измените цвет при наведении, если нужно
      //   },
      // }}
      sx={{
        borderRadius: '50%', // Делаем кнопку круглой
        width: 42, // Ширина кнопки
        minWidth: 42, // Ширина кнопки
        height: 42, // Высота кнопки
        minHeight: 42, // Высота кнопки
        // minWidth: 0, // Убираем минимальную ширину
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#00A99A', // Установите зеленый фон
        '&:hover': {
          backgroundColor: '#00A99A', // Измените цвет при наведении, если нужно
        },
      }}
    >
      <Icon />
    </Button>
  );
};

export default ButtonRound;
