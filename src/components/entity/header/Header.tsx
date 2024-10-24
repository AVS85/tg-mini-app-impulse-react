import { ButtonIcon } from '@/components/atoms';
import { HeaderHelp } from '../../icons';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { RouterPathEnum } from '@/components/App';

interface HeaderI {
  title?: string;
}

const Header = (props: HeaderI) => {
  const headerTitleVariants = {
    [RouterPathEnum.INDEX]: 'Чат с ИИмпульсом',
    [RouterPathEnum.ANALYZE_CONFLICT]: 'Анализ конфликта',
    [RouterPathEnum.ANALYZE_CONFLICT_CHAT]: 'Анализ конфликта',
    [RouterPathEnum.ANALYZE_MESSAGES]: 'Анализ сообщения',
    [RouterPathEnum.DIARY_EMOTIONS]: 'Дневник эмоций',
    [RouterPathEnum.PROFILE]: 'Мой профиль',
    [RouterPathEnum.SUBSCRIPTION]: 'Оформить подписку',
  };

  const location = useLocation();
  const titleHeader =
    headerTitleVariants?.[location.pathname as RouterPathEnum];
  console.log('location', {
    location,
    a: RouterPathEnum.INDEX,
    titleHeader,
  });

  // export enum RouterPathEnum {
  //   'INDEX' = '/',
  //   'ANALYZE_CONFLICT' = '/analyze-conflict',
  //   'ANALYZE_CONFLICT_CHAT' = '/analyze-conflict-chat',
  //   'ANALYZE_MESSAGES' = '/analyze-messages',
  //   'DIARY_EMOTIONS' = '/diary-emotions',
  //   'PROFILE' = '/profile',
  //   'SUBSCRIPTION' = '/subscription',
  // }

  // const { title } = props;
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
        {titleHeader}
      </Box>
      <Box>
        <ButtonIcon type="square" Icon={HeaderHelp} />
      </Box>
    </Box>
  );
};

export default Header;
