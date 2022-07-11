import { Theme } from '@react-navigation/native';

export interface ThemeState extends Theme {
  currentTheme: 'Light' | 'Dark';
  dividerColor: string;
}
