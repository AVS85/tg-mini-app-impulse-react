// import { useEffect } from 'react';
// import { StartTemplate } from '@/components/templates';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';
// import { useStores } from '../../store';

// import { AuthStepperEnum } from '../../enums/store/auth';

const AuthProvider = () => {
  const navigate = useNavigate();
  // const { authStore } = useStores();
  // const { authStep } = authStore;

  // useEffect(() => {
  //   if (authStep !== AuthStepperEnum.LOGGED) authStore.setAuthPopupIsDisplay(true);
  //   if (authStep === AuthStepperEnum.LOGGED) authStore.setAuthPopupIsDisplay(false);
  // }, [authStep]);
  // const isLogged = false;
  const isLogged = true;
  const isLogout = !isLogged;
  // const isLoading = false;

  useEffect(() => {
    if (isLogout) {
      console.log('[AuthProvider] isLogged:', isLogged);
      setTimeout(() => {
        console.log('[AuthProvider] Redirect...');
        navigate('/');
      }, 1000);
    }
    // if (!isLogged) navigate('/login');
  }, []);

  // useEffect(() => {
  //   if (!isLogged) navigate('/login');
  // }, []);

  if (isLogged) return <Outlet />;
  // if (!isLogged) return <div>LOADING</div>;
};

export default observer(AuthProvider);
