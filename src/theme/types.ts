import { MD3Theme } from 'react-native-paper';
import { Spacing } from './spacing';

export interface CustomColors {
  link: string;
}

export type ColorOverrides = CustomColors & Partial<MD3Theme['colors']>;

export type SpacingType = typeof Spacing;

export interface AppTheme extends MD3Theme {
  colors: MD3Theme['colors'] & CustomColors;
  spacing: SpacingType;
}
