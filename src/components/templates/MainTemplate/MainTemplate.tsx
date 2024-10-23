import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { BottomNavigation } from '@/components/entity';

// interface MainTemplateProps {
//   header?: React.ReactNode;
//   // children: React.ReactNode;
// }

const MainTemplate = () => {
  // const { header } = props;
  return (
    <Container
      sx={{
        // border: '3px solid red',
        backgroundColor: '#EFF1F2',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100vh',
        // overflow: 'hidden',
      }}
    >
      {/* <Box component="header">
        <Header title="123" />
      </Box> */}
      <Box
        component="main"
        sx={{
          // border: '4px solid red',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          // maxHeight: '100%',
          // height: '100%',
          // width: '100%',
        }}
      >
        <Outlet />
      </Box>
      <Box>
        <BottomNavigation />
      </Box>
    </Container>
  );
};

export default MainTemplate;
