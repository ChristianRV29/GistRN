import React, { createContext, useReducer } from 'react';

import { ThemeState } from '~src/@types/theme';
import { darkTheme, lighTheme, themeReducer } from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const [theme, dispatch] = useReducer(themeReducer, lighTheme);

  const setDarkTheme = () => dispatch({ type: 'set_dark_theme' });

  const setLightTheme = () => dispatch({ type: 'set_light_theme' });

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
