import { ThemeProp } from 'react-native-paper/lib/typescript/types';

const fontFamily = 'sans-serif';

export const fonts: ThemeProp['fonts'] = {
  default: {
    fontFamily: fontFamily,
  },
  // display
  displayLarge: {
    fontFamily: fontFamily,
    fontSize: 57,
    letterSpacing: -0.25,
    lineHeight: 64,
  },
  displayMedium: {
    fontFamily: fontFamily,
    fontSize: 45,
    letterSpacing: 0,
    lineHeight: 33,
  },
  displaySmall: {
    fontFamily: fontFamily,
    fontSize: 36,
    letterSpacing: 0,
    lineHeight: 44,
  },
  // headline
  headlineLarge: {
    fontFamily: fontFamily,
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: 40,
  },
  headlineMedium: {
    fontFamily: fontFamily,
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineSmall: {
    fontFamily: fontFamily,
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 32,
  },
  // title
  titleLarge: {
    fontFamily: fontFamily,
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: 28,
  },
  titleMedium: {
    fontFamily: fontFamily,
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily: fontFamily,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  // label
  labelLarge: {
    fontFamily: fontFamily,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: fontFamily,
    fontSize: 15,
    letterSpacing: 0.5,
    lineHeight: 18,
  },
  labelSmall: {
    fontFamily: fontFamily,
    fontSize: 10,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  // body
  bodyLarge: {
    fontFamily: fontFamily,
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: fontFamily,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: fontFamily,
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 16,
  },
};
