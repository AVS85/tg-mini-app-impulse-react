import { ButtonIcon, Text } from '@/components/atoms';
import { HeaderHelp } from '../../icons';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { RouterPathEnum } from '@/components/App';

// interface HeaderI {
//   title?: string;
// }

const Header = () => {
  const location = useLocation();

  const headerTitleVariants = {
    [RouterPathEnum.INDEX]: 'Чат с ИИмпульсом',
    [RouterPathEnum.ANALYZE_CONFLICT]: 'Анализ конфликта',
    [RouterPathEnum.ANALYZE_CONFLICT_CHAT]: 'Анализ конфликта',
    [RouterPathEnum.ANALYZE_MESSAGES]: 'Анализ сообщения',
    [RouterPathEnum.ANALYZE_MESSAGES_CHAT]: 'Анализ сообщений в чате',
    [RouterPathEnum.DIARY_EMOTIONS]: 'Дневник эмоций',
    [RouterPathEnum.PROFILE]: 'Мой профиль',
    [RouterPathEnum.SUBSCRIPTION]: 'Оформить подписку',
  };

  const titleHeader =
    headerTitleVariants?.[location.pathname as RouterPathEnum];

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
        <Text.h1 bold>{titleHeader}</Text.h1>
      </Box>
      <Box>
        <ButtonIcon type="square" Icon={HeaderHelp} />
      </Box>
    </Box>
  );
};

export default Header;
