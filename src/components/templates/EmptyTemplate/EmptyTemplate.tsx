import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
// import { BottomNavigation, Header } from '@/components/entity';

// interface MainTemplateProps {
//   header?: React.ReactNode;
//   // children: React.ReactNode;
// }

export type EmptyTemplatePropsT = {
  children?: React.ReactNode;
};

const EmptyTemplate = (props: EmptyTemplatePropsT) => {
  const { children } = props;
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
      {children ? children : <Outlet />}
    </Container>
  );
};

export default EmptyTemplate;
