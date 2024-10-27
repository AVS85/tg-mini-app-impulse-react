// import { useEffect } from 'react';
// import { StartTemplate } from '@/components/templates';
import { StartTemplate } from '@/components/templates';
import StartPage from '@/pages/Start';
import { observer } from 'mobx-react';
// import { useEffect } from 'react';
import { Outlet } from 'react-router';
// import { useNavigate } from 'react-router-dom';
// import { useStores } from '../../store';

// import { AuthStepperEnum } from '../../enums/store/auth';

const AuthProvider = () => {
  // const navigate = useNavigate();
  // const { authStore } = useStores();
  // const { authStep } = authStore;

  // useEffect(() => {
  //   if (authStep !== AuthStepperEnum.LOGGED) authStore.setAuthPopupIsDisplay(true);
  //   if (authStep === AuthStepperEnum.LOGGED) authStore.setAuthPopupIsDisplay(false);
  // }, [authStep]);

  // const isLogged = true;
  const isLogged = false;

  if (isLogged) {
    return <Outlet />;
  } else {
    return (
      <StartTemplate>
        <StartPage />
      </StartTemplate>
    );
  }

  // if (!isLogged) return <StartTemplate>{/* <StartPage /> */}</StartTemplate>;
};

export default observer(AuthProvider);
