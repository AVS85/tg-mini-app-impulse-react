import { Box, SxProps } from '@mui/material';

interface ContentBoxPropsI {
  children: React.ReactNode;
  sxProps?: SxProps;
}

const ContentBox = (props: ContentBoxPropsI) => {
  const { children, sxProps } = props;
  return (
    <Box
      sx={{
        // border: '1px solid red',
        display: 'flex',
        borderRadius: '16px',
        padding: '18px 18px 18px 14px',
        boxShadow: '3px 3px 10px 0px #C8CFDD, -4px -4px 8px 0px #FFFFFF',
        ...sxProps,
      }}
    >
      {children}
    </Box>
  );
};

export default ContentBox;
