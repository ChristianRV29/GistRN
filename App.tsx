import 'react-native-safe-area-context';
import React from 'react';

import { StackNavigator } from '~src/navigation/StackNavigator';
import { ThemeProvider } from '~src/context/theme/theme';

const App = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
};

export default App;
