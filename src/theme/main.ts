import { darkColors, lightColors } from '@/theme/colors';
import { fonts } from '@/theme/fonts';
import { Spacing } from '@/theme/spacing';
import { AppTheme } from '@/theme/types';
import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';

const generateTheme = (baseTheme: MD3Theme): AppTheme => {
  const customColors = baseTheme.dark ? darkColors : lightColors;

  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...customColors,
    },
    fonts: {
      ...baseTheme.fonts,
      ...fonts,
    },
    spacing: Spacing,
  };
};

export const lightTheme = generateTheme(MD3LightTheme);
export const darkTheme = generateTheme(MD3DarkTheme);
