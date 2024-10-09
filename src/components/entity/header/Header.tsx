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
      sx={{
        // border: '1px solid red',
        display: 'flex',
        padding: '18px 20px',
        alignItems: 'center',
      }}
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
