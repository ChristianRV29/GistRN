import React, { useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '~src/context/theme/theme';
import { SwitchWrapper } from './styles';

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
      <Icon name="sunny-outline" size={25} color={theme.colors.text} />
      <Switch
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
      <Icon name="moon-outline" size={25} color={theme.colors.text} />
    </SwitchWrapper>
  );
};
