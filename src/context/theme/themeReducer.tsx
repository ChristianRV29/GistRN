import { ThemeState } from '~src/@types/theme';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: '#0f1d25',
  colors: {
    primary: '#0F4C75',
    background: '#222831',
    card: '#30475E',
    text: '#D8EFFF',
    border: '#BBE1FA',
    notification: '#DFF6FF',
  },
};
export const lightTheme: ThemeState = {
  currentTheme: 'Light',
  dark: false,
  dividerColor: '#0f1d25',
  colors: {
    primary: '#0F4C75',
    background: '#d6f2ff',
    card: '#93B5C6',
    text: '#000080',
    border: '#1b558b',
    notification: '#023d54',
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
      return { ...lightTheme };
    default:
      return state;
  }
};
