// import { useEffect } from 'react';
// import { EmptyTemplate } from '@/components/templates';
import { EmptyTemplate } from '@/components/templates';
import StartPage from '@/pages/Start';
import { useStores } from '@/store';
import { AuthStepperEnum } from '@/store/auth';
import { observer } from 'mobx-react';
// import { useEffect } from 'react';
import { Outlet } from 'react-router';
// import { useNavigate } from 'react-router-dom';
// import { useStores } from '../../store';

// import { AuthStepperEnum } from '../../enums/store/auth';

const AuthProvider = () => {
  // const navigate = useNavigate();
  const { authStore } = useStores();
  const { authStatus } = authStore;

  // useEffect(() => {
  //   if (authStep !== AuthStepperEnum.LOGGED) authStore.setAuthPopupIsDisplay(true);
  //   if (authStep === AuthStepperEnum.LOGGED) authStore.setAuthPopupIsDisplay(false);
  // }, [authStep]);

  const isLogged = authStatus === AuthStepperEnum.LOGGED;

  if (isLogged) {
    return <Outlet />;
  } else {
    return (
      <EmptyTemplate>
        <StartPage />
      </EmptyTemplate>
    );
  }
};

export default observer(AuthProvider);
