import { Box } from '@mui/material';
import WelcomeIcon from '@/components/icons/welcomeIcon';

interface WelcomeBoxI {
  title?: string;
}
const WelcomeBox = (props: WelcomeBoxI) => {
  const { title } = props;
  return (
    <Box
      sx={{
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        // padding: '18px 20px',
        // alignItems: 'center',
        // height: '198px',
        fontSize: '24px',
        color: '#1F2F57',
      }}
    >
      <WelcomeIcon width={200} sx={{ fontSize: '180px' }} />
      {title && (
        <Box
          sx={{
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: '18px',
            textAlign: 'center',
            maxWidth: '300px',
          }}
        >
          {title}
        </Box>
      )}
    </Box>
  );
};

export default WelcomeBox;
