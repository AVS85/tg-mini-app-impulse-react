import { appUI } from './colors';

export const appTheme = {
  typography: {
    h1: {
      fontSize: '20px',
      fontWeight: 350,
      lineHeight: '22px',
      color: appUI.colors.black,
    },
    // h1Bold: {
    //   // Новый вариант для жирного шрифта
    //   fontSize: '20px',
    //   fontWeight: 700, // Увеличиваем вес для жирного шрифта
    //   lineHeight: '22px',
    //   color: appUI.colors.black,
    // },
    h2: {
      fontSize: '17px',
      fontWeight: 500,
      lineHeight: '27px',
      color: appUI.colors.black,
    },
    body1: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      color: appUI.colors.black,
    },
    subtitle1: {
      fontSize: '9px',
      fontWeight: 400,
      lineHeight: '11px',
      color: appUI.colors.black,
      // textTransform: 'none',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '13px',
            border: '1px solid #D8DDDF',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            // color: 'darkblue',
            border: '1px solid #D8DDDF',
          },
          '&:hover fieldset': {
            borderColor: '#D8DDDF', // Цвет рамки при наведении
          },
        },
      },
    },
  },
};
