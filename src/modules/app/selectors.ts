import { RootState } from '@/modules/app/store';

const getThemeMode = (state: RootState) => state.app.themeMode;

export const appSelectors = {
  getThemeMode,
};
