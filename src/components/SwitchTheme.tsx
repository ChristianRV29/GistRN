import React, { useContext, useState } from 'react';
import { Switch, View, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '~src/context/theme/theme';

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
    <View style={styles.themeSwitchWrapper}>
      <Icon name="sunny-outline" size={25} color={theme.colors.text} />
      <Switch
        style={styles.switch}
        value={darkIsEnabled}
        onChange={toogleSwitch}
        trackColor={{
          false: theme.colors.text,
          true: theme.colors.text,
        }}
        thumbColor={
          Platform.OS === 'android'
            ? theme.colors.border
            : theme.colors.background
        }
      />
      <Icon name="moon-outline" size={25} color={theme.colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  themeSwitchWrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  switch: {
    marginHorizontal: 2,
  },
});
