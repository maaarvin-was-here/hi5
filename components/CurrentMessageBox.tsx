import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { renderSwitch } from './NearbyPersonBox';

type CurrentMessageBoxProps = {
  message: string;
  name: string;
  avatar: number;
};

export default function CurrentMessageBox(props: CurrentMessageBoxProps) {
  const { message, name, avatar } = props;
  var pic = renderSwitch(avatar);
  return (
    <View style={styles.outer_box}>
      <Text>
        <View style={styles.container}>
          <Image source={pic} style={{ width: 80, height: 80 }} />
        </View>
        <View style={styles.container}>
          <Text style={styles.name}>
            {name}
            {'\n'}
          </Text>
          <Text style={styles.italic}>{message}</Text>
        </View>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#73D6D8',
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  outer_box: {
    flex: 1,
    padding: 8,
    backgroundColor: '#73D6D8',
    borderRadius: 10,
    margin: 5,
  },
  italic: { fontStyle: 'italic', marginTop: -20, color: 'black' },
});
