import React from 'react';
import { appSelectors } from '@/modules/app/selectors';
import { store, useAppSelector } from '@/modules/app/store';
import { darkTheme, lightTheme } from '@/modules/app/theme';
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

export default RootLayout;
