import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';

import { ThemeContext } from '~src/context/theme/theme';
import { MoonIcon, StyledSWitch, SunIcon, SwitchWrapper } from './styles';

export const SwitchTheme = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext);
  const [darkIsEnabled, setDarkIsEnabled] = useState<boolean>(theme.dark);

  const toogleSwitch = () => {
    setDarkIsEnabled(!darkIsEnabled);
    if (theme.dark) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };
  return (
    <SwitchWrapper>
      <SunIcon name="sunny-outline" size={25} color={theme.colors.text} />
      <StyledSWitch
        value={darkIsEnabled}
        onChange={toogleSwitch}
        trackColor={{
          false: theme.colors.text,
          true: theme.colors.primary,
        }}
        thumbColor={
          Platform.OS === 'android'
            ? theme.colors.primary
            : theme.colors.background
        }
      />
      <MoonIcon name="moon-outline" size={25} color={theme.colors.text} />
    </SwitchWrapper>
  );
};
