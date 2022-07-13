import React from 'react';
import { Image, Text, View } from 'react-native';
import { PublicGist } from '~src/@types/index';

interface Props {
  gist: PublicGist;
}

export const GistCard: React.FC<Props> = ({ gist }) => {
  console.log('🤖 Gist: ', gist);
  return (
    <View style={{ width: '100%', borderWidth: 2, borderColor: 'grey' }}>
      <View>
        <Text>{gist.url}</Text>
      </View>
      <View></View>
    </View>
  );
};
