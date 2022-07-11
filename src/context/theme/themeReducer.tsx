import { ThemeState } from '~src/@types/theme';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: '#0f1d25',
  colors: {
    primary: '#1B262C',
    background: '#0F4C75',
    card: '#3282B8',
    text: '#D8EFFF',
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
      return { ...state };
    default:
      return state;
  }
};
