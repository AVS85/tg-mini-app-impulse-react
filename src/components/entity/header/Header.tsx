import { ButtonIcon } from '@/components/atoms';
import { HeaderHelp } from '../../icons';
import { Box } from '@mui/material';

interface HeaderI {
  title: string;
}

const Header = (props: HeaderI) => {
  const { title } = props;
  return (
    <Box
      sx={{ display: 'flex', border: '1px solid red', padding: '18px 20px' }}
    >
      <Box
        sx={{
          flex: 1,
          fontWeight: 'bold',
          fontSize: '20px',
          lineHeight: '22px',
          alignItems: 'center',
        }}
      >
        {title}
      </Box>
      <Box>
        <ButtonIcon type="square" Icon={HeaderHelp} />
      </Box>
    </Box>
  );
};

export default Header;
