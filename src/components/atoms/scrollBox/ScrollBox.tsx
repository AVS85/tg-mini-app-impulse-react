import { appUI } from '@/common/colors';
import { Box, SxProps } from '@mui/material';

interface ScrollBoxPropsI {
  children: React.ReactNode;
  sxProps?: SxProps;
  // verticalAlign?: 'center' | 'flex-end';
}

const ScrollBox = (props: ScrollBoxPropsI) => {
  const {
    children,
    // verticalAlign = 'flex-end',
    sxProps,
  } = props;
  return (
    <Box
      component="section"
      sx={{
        // border: '1px solid green',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        flex: 1,
        '&::-webkit-scrollbar': {
          width: '3px', // Ширина скроллбара
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: appUI.colors.accent[600], // Цвет "ползунка"
          borderRadius: '2px', // Скругление углов
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: appUI.colors.accent[800], // Цвет "ползунка" при наведении
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent', // Цвет фона скроллбара
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
