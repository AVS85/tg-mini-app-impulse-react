import { appUI } from '@/common/colors';
import { Box, SxProps } from '@mui/material';

interface ScrollBoxPropsI {
  children: React.ReactNode;
  sxProps?: SxProps;
}

const ScrollBox = (props: ScrollBoxPropsI) => {
  const { children, sxProps } = props;
  return (
    <Box
      component="section"
      sx={{
        // border: '2px solid green',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        alignItems: 'center',
        overflowY: 'scroll',
        flex: 1,
        '&::-webkit-scrollbar': {
          width: '3px', // Ширина скроллбара
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: appUI.colors.accent[600], // Цвет "ползунка"
          // backgroundColor: '#888', // Цвет "ползунка"
          borderRadius: '2px', // Скругление углов
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: appUI.colors.accent[800], // Цвет "ползунка" при наведении
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent', // Цвет фона скроллбара
          // background: '#f1f1f1', // Цвет фона скроллбара
          borderRadius: '24px', // Скругление углов трека
        },
        ...sxProps,
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollBox;
