import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import CurrentMessageBox from '../components/CurrentMessageBox';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CurrentMessageBox
        name="Olivia"
        message="I'm by the fountain."
      ></CurrentMessageBox>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <CurrentMessageBox
        name="Liam"
        message="Let's meet up!"
      ></CurrentMessageBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
