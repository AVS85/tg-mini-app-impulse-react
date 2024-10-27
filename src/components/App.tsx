import WebApp from '@twa-dev/sdk';
import { AppRoot } from '@telegram-apps/telegram-ui';
import {
  Route,
  BrowserRouter,
  Routes,
  // useLocation,
  // useNavigate,
} from 'react-router-dom';

import { MainTemplate, EmptyTemplate } from './templates';
import {
  AnalyzeConflict,
  AnalyzeConflictChat,
  AnalyzeMessages,
  AnalyzeMessagesChat,
  Chat,
  DiaryEmotions,
  SignUp,
  Profile,
  Subscription,
} from '@/pages';
import { ThemeProvider, createTheme } from '@mui/material';
import { appTheme } from '@/common/theme';
import { AuthProvider } from '@/navigation/authProvider';
import Start from '@/pages/Start';

export enum RouterPathEnum {
  'INDEX' = '/',
  'CHAT' = '/chat',
  'ANALYZE_CONFLICT' = '/analyze-conflict',
  'ANALYZE_CONFLICT_CHAT' = '/analyze-conflict-chat',
  'ANALYZE_MESSAGES' = '/analyze-messages',
  'ANALYZE_MESSAGES_CHAT' = '/analyze-messages-chat',
  'DIARY_EMOTIONS' = '/diary-emotions',
  'PROFILE' = '/profile',
  'SIGN_UP' = '/signUp',
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
          <Route element={<EmptyTemplate />}>
            <Route index element={<Start />} />
            <Route path="/signUp" element={<SignUp />} />
          </Route>

          <Route element={<AuthProvider />}>
            <Route element={<MainTemplate />}>
              <Route path={RouterPathEnum.CHAT} element={<Chat />} />
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
              <Route
                path={RouterPathEnum.ANALYZE_MESSAGES_CHAT}
                element={<AnalyzeMessagesChat />}
              />
              <Route path={RouterPathEnum.PROFILE} element={<Profile />} />
              <Route
                path={RouterPathEnum.SUBSCRIPTION}
                element={<Subscription />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppRoot>
  </ThemeProvider>
);
        // {/* <Route path='*' element={<MainTemplate />}>
        // {routes.map((route) => <Route key={route.path} {...route} />)}
        // { path: '/profile', Component: Profile, title: 'Профиль' },
      
