import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { BottomNavigation, Header } from '@/components/entity';

// interface MainTemplateProps {
//   header?: React.ReactNode;
//   // children: React.ReactNode;
// }

const MainTemplate = () => {
  // const { header } = props;
  return (
    <Container
      sx={{
        // border: '1px solid grey',
        backgroundColor: '#EFF1F2',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100vh',
        width: '100%',
        maxWidth: '769px',
        // overflow: 'hidden',
      }}
    >
      <Box component="header">
        <Header />
      </Box>
      <Box
        component="main"
        sx={{
          // border: '1px solid red',
          display: 'flex',
          height: '100%',
          overflowY: 'hidden',
          paddingBottom: '30px',
        }}
      >
        <Outlet />
      </Box>
      <Box
        sx={
          {
            // border: '1px solid grey',
          }
        }
      >
        <BottomNavigation />
      </Box>
    </Container>
  );
};

export default MainTemplate;
