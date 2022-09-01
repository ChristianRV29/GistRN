import { ThemeState } from '~src/@types/theme';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: 'rgb(165, 201, 202)',
  colors: {
    primary: 'rgb(165, 214, 246)',
    background: 'rgb(44, 51, 51)',
    card: 'rgb(57, 91, 100)',
    text: 'rgb(165, 201, 202)',
    border: 'rgb(165, 201, 202)',
    notification: 'rgb(231, 246, 242)',
  },
};
export const lightTheme: ThemeState = {
  currentTheme: 'Light',
  dark: false,
  dividerColor: 'rgb(53, 66, 89)',
  colors: {
    background: 'rgb(222, 222, 222)',
    border: 'rgba(78, 114, 224, 0.8)',
    card: 'rgba(255, 255, 255, 0.95)',
    notification: 'rgb(255,255,255)',
    primary: 'rgb(196, 215, 224)',
    text: 'rgb(110, 133, 183)',
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
