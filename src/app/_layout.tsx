import React from 'react';
import { enableMocking } from '@/mocks/enableMocking';
import { appSelectors } from '@/modules/app/selectors';
import { store, useAppSelector } from '@/modules/app/store';
import { darkTheme, lightTheme } from '@/theme';
import { registerRootComponent } from 'expo';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

const RootLayout = () => {
  return (
    <Provider store={store}>
      <AppWithStore />
    </Provider>
  );
};

const AppWithStore = () => {
  const isDarkMode = useAppSelector(appSelectors.getThemeMode) === 'dark';

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
};

enableMocking().then(() => {
  registerRootComponent(RootLayout);
});

export default RootLayout;
