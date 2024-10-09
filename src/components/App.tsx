import WebApp from '@twa-dev/sdk';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { type FC, useEffect } from 'react';
import {
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { MainTemplate } from './templates';
import {
  AnalyzeConflict,
  AnalyzeMessages,
  Chat,
  DiaryPage,
  Profile,
} from '@/pages';
import { ThemeProvider, createTheme } from '@mui/material';

function BackButtonManipulator() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onClick() {
      navigate(-1);
    }
    WebApp.BackButton.onClick(onClick);

    return () => WebApp.BackButton.offClick(onClick);
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === '/') {
      WebApp.BackButton.isVisible && WebApp.BackButton.hide();
    } else {
      !WebApp.BackButton.isVisible && WebApp.BackButton.show();
    }
  }, [location]);

  return null;
}

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '13px',
            border: '1px solid #D8DDDF',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            // color: 'darkblue',
            border: '1px solid #D8DDDF',
          },
          '&:hover fieldset': {
            borderColor: '#D8DDDF', // Цвет рамки при наведении
          },
        },
      },
    },
  },
});

export const App: FC = () => (
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
            <Route path="/analyze-conflict" element={<AnalyzeConflict />} />
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/analyze-messages" element={<AnalyzeMessages />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppRoot>
  </ThemeProvider>
);
        // {/* <Route path='*' element={<MainTemplate />}>
        // {routes.map((route) => <Route key={route.path} {...route} />)}
        // { path: '/profile', Component: Profile, title: 'Профиль' },
      
