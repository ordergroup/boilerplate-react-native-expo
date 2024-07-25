import { STORAGE_KEYS } from '@/constants/storage';
import { appSliceActions } from '@/modules/app/slice';
import { AppState } from '@/modules/app/slice.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const changeThemeMode = (themeMode: AppState['themeMode']) => {
  AsyncStorage.setItem(STORAGE_KEYS.themeMode, themeMode).catch(() => {
    console.error('Failed to save theme mode to storage');
  });

  return appSliceActions.setThemeMode(themeMode);
};

export const appActions = {
  changeThemeMode,
};
