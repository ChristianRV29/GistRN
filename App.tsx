import React from 'react';
import { Text, View } from 'react-native';
import { useGists } from '~src/hooks/useGists';

const App = () => {
  const { isLoading, publicGists } = useGists();

  console.log('💬 ~ Gits: ', publicGists);

  return (
    <View>
      <Text>{isLoading ? 'Loading' : 'No loading'}</Text>
    </View>
  );
};

export default App;
