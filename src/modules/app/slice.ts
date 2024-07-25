import { AppState } from '@/modules/app/slice.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: AppState = {
  themeMode: 'light',
};

export const APP_REDUCER_NAME = 'app';

const appSlice = createSlice({
  name: APP_REDUCER_NAME,
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<AppState['themeMode']>) => {
      state.themeMode = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
export const appSliceActions = appSlice.actions;
