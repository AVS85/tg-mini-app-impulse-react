import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { BottomNavigation } from '@/components/entity';

// interface MainTemplateProps {
//   header?: React.ReactNode;
//   // children: React.ReactNode;
// }

const MainTemplate = () => {
  // const { header } = props;
  return (
    <Box
      sx={{
        // border: '3px solid red',
        backgroundColor: '#EFF1F2',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {/* <Box component="header">
        <Header title="123" />
      </Box> */}
      <Box
        component="main"
        sx={{ border: '1px solid red', flex: 1, margin: '2px' }}
      >
        <Outlet />
      </Box>
      <BottomNavigation />
    </Box>
  );
};

export default MainTemplate;
