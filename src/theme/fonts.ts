import { MD3Theme } from 'react-native-paper';

const fontFamily = 'sans-serif';

export const fonts: Partial<MD3Theme['fonts']> = {
  default: {
    fontFamily: fontFamily,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
  // display
  displayLarge: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 57,
    letterSpacing: -0.25,
    lineHeight: 64,
  },
  displayMedium: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 45,
    letterSpacing: 0,
    lineHeight: 33,
  },
  displaySmall: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 36,
    letterSpacing: 0,
    lineHeight: 44,
  },
  // headline
  headlineLarge: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: 40,
  },
  headlineMedium: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineSmall: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 32,
  },
  // title
  titleLarge: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: 28,
  },
  titleMedium: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  // label
  labelLarge: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 15,
    letterSpacing: 0.5,
    lineHeight: 18,
  },
  labelSmall: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 10,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  // body
  bodyLarge: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: fontFamily,
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 16,
  },
};
