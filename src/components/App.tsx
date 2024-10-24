import WebApp from '@twa-dev/sdk';
import { AppRoot } from '@telegram-apps/telegram-ui';
import {
  Route,
  BrowserRouter,
  Routes,
  // useLocation,
  // useNavigate,
} from 'react-router-dom';

import { MainTemplate } from './templates';
import {
  AnalyzeConflict,
  AnalyzeConflictChat,
  AnalyzeMessages,
  Chat,
  DiaryEmotions,
  Profile,
  Subscription,
} from '@/pages';
import { ThemeProvider, createTheme } from '@mui/material';
import { appTheme } from '@/common/theme';

export enum RouterPathEnum {
  'INDEX' = '/',
  'ANALYZE_CONFLICT' = '/analyze-conflict',
  'ANALYZE_CONFLICT_CHAT' = '/analyze-conflict-chat',
  'ANALYZE_MESSAGES' = '/analyze-messages',
  'DIARY_EMOTIONS' = '/diary-emotions',
  'PROFILE' = '/profile',
  'SUBSCRIPTION' = '/subscription',
}

function BackButtonManipulator() {
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   function onClick() {
  //     navigate(-1);
  //   }
  //   WebApp.BackButton.onClick(onClick);

  //   return () => WebApp.BackButton.offClick(onClick);
  // }, [navigate]);

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     WebApp.BackButton.isVisible && WebApp.BackButton.hide();
  //   } else {
  //     !WebApp.BackButton.isVisible && WebApp.BackButton.show();
  //   }
  // }, [location]);

  return null;
}

const theme = createTheme(appTheme);

export const App = () => (
  <ThemeProvider theme={theme}>
    <AppRoot
      appearance={WebApp.colorScheme}
      platform={['macos', 'ios'].includes(WebApp.platform) ? 'ios' : 'base'}
    >
      <BrowserRouter>
        <BackButtonManipulator />
        <Routes>
          <Route element={<MainTemplate />}>
            <Route index element={<Chat />} />
            <Route
              path={RouterPathEnum.ANALYZE_CONFLICT}
              element={<AnalyzeConflict />}
            />
            <Route
              path={RouterPathEnum.ANALYZE_CONFLICT_CHAT}
              element={<AnalyzeConflictChat />}
            />
            <Route
              path={RouterPathEnum.DIARY_EMOTIONS}
              element={<DiaryEmotions />}
            />
            <Route
              path={RouterPathEnum.ANALYZE_MESSAGES}
              element={<AnalyzeMessages />}
            />
            <Route path={RouterPathEnum.PROFILE} element={<Profile />} />
            <Route
              path={RouterPathEnum.SUBSCRIPTION}
              element={<Subscription />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppRoot>
  </ThemeProvider>
);
        // {/* <Route path='*' element={<MainTemplate />}>
        // {routes.map((route) => <Route key={route.path} {...route} />)}
        // { path: '/profile', Component: Profile, title: 'Профиль' },
      
