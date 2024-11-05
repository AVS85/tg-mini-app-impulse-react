import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';

interface MainTemplateProps {
  slotHeader?: JSX.Element;
  slotNavigation?: JSX.Element;
  // header?: React.ReactNode;
  // children: React.ReactNode;
}

const MainTemplate = (props: MainTemplateProps) => {
  const { slotHeader, slotNavigation } = props;

  const isHeaderExist = !!slotHeader;
  const isNavigationExist = !!slotNavigation;
  return (
    <Container
      disableGutters
      sx={{
        // border: '1px solid grey',
        backgroundColor: '#EFF1F2',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100vh',
        width: '100%',
        maxWidth: '769px',
        paddingRight: 0,
        paddingLeft: 0,
        // overflow: 'hidden',
      }}
    >
      {isHeaderExist && <Box component="header">{slotHeader}</Box>}

      <Box
        component="main"
        sx={{
          // border: '1px solid red',
          display: 'flex',
          height: '100%',
          overflowY: 'hidden',
          // paddingBottom: '30px',
        }}
      >
        <Outlet />
      </Box>

      {isNavigationExist && <Box component="nav">{slotNavigation}</Box>}
    </Container>
  );
};

export default MainTemplate;
