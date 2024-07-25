import { AppState } from '@/modules/app/slice.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: AppState = {
  themeMode: 'light',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<AppState['themeMode']>) => {
      state.themeMode = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
export const appSliceActions = appSlice.actions;
