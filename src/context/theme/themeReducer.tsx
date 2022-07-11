import { ThemeState } from '~src/@types/theme';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: '#005f9f',
  colors: {
    primary: '#0F4C75',
    background: '#2C394B',
    card: '#347fb1',
    text: '#F0F9FF',
    border: '#BBE1FA',
    notification: '#DFF6FF',
  },
};
export const lighTheme: ThemeState = {
  currentTheme: 'Light',
  dark: false,
  dividerColor: '#005f9f',
  colors: {
    primary: '#D0E8F2',
    background: '#FCF8EC',
    card: '#79A3B1',
    text: '#456268',
    border: '#BBE1FA',
    notification: '#DFF6FF',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_dark_theme':
      return { ...darkTheme };
    case 'set_light_theme':
      return { ...lighTheme };
    default:
      return state;
  }
};
