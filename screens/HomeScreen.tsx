import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import CurrentMessageBox from '../components/CurrentMessageBox';
import NearbyPersonBox from '../components/NearbyPersonBox';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.separating_bar}>Current Messages</Text>
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
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.separating_bar}>People Nearby</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <NearbyPersonBox
        name="Celeste"
        interest_1="Cooking"
        interest_2="Hiking"
        interest_3="Alpine Skiing"
        is_flagged={true}
        is_student={true}
        is_vaccinated={false}
        is_verified={true}
      ></NearbyPersonBox>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <NearbyPersonBox
        name="Ezekiel"
        interest_1="Travelling"
        interest_2="Baseball"
        interest_3="Card Games"
        is_flagged={false}
        is_student={false}
        is_vaccinated={true}
        is_verified={true}
      ></NearbyPersonBox>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <NearbyPersonBox
        name="Carlos"
        interest_1="Dance"
        interest_2="Jazz Music"
        interest_3="Sustainability"
        is_flagged={false}
        is_student={true}
        is_vaccinated={true}
        is_verified={true}
      ></NearbyPersonBox>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <NearbyPersonBox
        name="Malika"
        interest_1="Acting"
        interest_2="Singing"
        interest_3="Enjoying new food spots"
        is_flagged={false}
        is_student={true}
        is_vaccinated={true}
        is_verified={true}
      ></NearbyPersonBox>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <NearbyPersonBox
        name="Stephen"
        interest_1="Pokemon"
        interest_2="Gardening"
        interest_3="Collecting new gemstones"
        is_flagged={false}
        is_student={true}
        is_vaccinated={true}
        is_verified={false}
      ></NearbyPersonBox>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separating_bar: { fontSize: 20, fontWeight: 'bold', padding: 10 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '80%',
  },
});
