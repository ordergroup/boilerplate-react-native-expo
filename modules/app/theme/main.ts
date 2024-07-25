import {
  CustomColors,
  darkColors,
  lightColors,
} from '@/modules/app/theme/colors';
import { fonts } from '@/modules/app/theme/fonts';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

const generateTheme: (
  theme: ThemeProp,
) => ThemeProp & { colors: ThemeProp['colors'] & CustomColors } = theme => ({
  ...theme,
  roundness: 2,
  mode: 'exact',
  colors: {
    ...theme.colors,
    ...(theme.dark ? darkColors : lightColors),
  },
  fonts: {
    ...theme.fonts,
    ...fonts,
  },
});

export const lightTheme = generateTheme(MD3LightTheme);
export const darkTheme = generateTheme(MD3DarkTheme);
