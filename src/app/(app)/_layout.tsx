import { SCREENS } from '@/modules/app/constants';
import { Redirect, Stack } from 'expo-router';

const AppLayout = () => {
  const isAuthorized = true;
  
  if (!isAuthorized) {
    return <Redirect href={SCREENS.login} />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Stack />;
};

export default AppLayout;
