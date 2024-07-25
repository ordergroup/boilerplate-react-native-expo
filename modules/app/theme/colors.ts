import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export type CustomColors = {
  link: string;
};
export const lightColors: ThemeProp['colors'] & CustomColors = {
  primary: '#FF6F00',
  secondary: '#FFD180',
  outline: '#FFAB40',
  background: '#FFF8E1',
  error: '#D32F2F',
  link: '#0080ff',
};

export const darkColors: ThemeProp['colors'] & CustomColors = {
  primary: '#FFA726',
  secondary: '#1E2022',
  outline: '#FFAB40',
  background: '#191C1E',
  error: '#DE305D',
  link: '#0080ff',
};
