import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

type CurrentMessageBoxProps = {
  message: string;
  name: string;
};

export default function CurrentMessageBox(props: CurrentMessageBoxProps) {
  const { message, name } = props;
  return (
    <View style={styles.container}>
      <Text>
        <View style={styles.container}>
          <Image
            source={require('./img/avatar_1.png')}
            style={{ width: 80, height: 80 }}
          />
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
    padding: 5,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  italic: { fontStyle: 'italic', marginTop: -20 },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
