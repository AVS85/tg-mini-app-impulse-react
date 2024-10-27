import { Box } from '@mui/material';
import WelcomeIcon from '@/components/icons/welcomeIcon';
import { Button, ButtonIcon, ContentBox, Text } from '@/components/atoms';

interface WelcomeBoxI {
  title?: string;
  subtitle?: string;
}
const WelcomeBox = (props: WelcomeBoxI) => {
  const { title, subtitle } = props;
  return (
    <Box
      sx={{
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '35px',
        // padding: '18px 20px',
        // alignItems: 'center',
        // height: '198px',
        fontSize: '24px',
        color: '#1F2F57',
      }}
    >
      <WelcomeIcon width={200} sx={{ fontSize: '180px' }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {title && (
          <Box
            sx={{
              // fontSize: '15px',
              // fontWeight: 400,
              // lineHeight: '18px',
              textAlign: 'center',
              maxWidth: '300px',
            }}
          >
            <Text.h1>{title}</Text.h1>
          </Box>
        )}
        {subtitle && (
          <Box
            sx={{
              // fontSize: '15px',
              // fontWeight: 400,
              // lineHeight: '18px',
              textAlign: 'center',
              maxWidth: '300px',
            }}
          >
            <Text.body>{subtitle}</Text.body>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WelcomeBox;
