import React from 'react';
import { appActions } from '@/modules/app/actions';
import { appSelectors } from '@/modules/app/selectors';
import { AppState } from '@/modules/app/slice.types';
import { useAppDispatch, useAppSelector } from '@/modules/app/store';
import { Button, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(appSelectors.getThemeMode);
  const oppositeMode = mode === 'dark' ? 'light' : 'dark';

  const changeThemeMode = (mode: AppState['themeMode']) => {
    dispatch(appActions.changeThemeMode(mode));
  };

  return (
    <SafeAreaView>
      <Text>DashboardScreen</Text>
      <Button onPress={() => changeThemeMode(oppositeMode)}>
        Change theme mode to {oppositeMode}
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
