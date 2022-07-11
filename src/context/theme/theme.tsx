import React, { createContext } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: any) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};
