import { Container } from '@mui/material';
// import { BottomNavigation, Header } from '@/components/entity';

// interface MainTemplateProps {
//   header?: React.ReactNode;
//   // children: React.ReactNode;
// }

export type StartTemplatePropsT = {
  children: React.ReactNode;
};

const StartTemplate = (props: StartTemplatePropsT) => {
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
      {children}
    </Container>
  );
};

export default StartTemplate;
