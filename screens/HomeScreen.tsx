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
        avatar={3}
      ></CurrentMessageBox>
      <CurrentMessageBox
        name="Liam"
        message="Let's meet up!"
        avatar={4}
      ></CurrentMessageBox>
      <Text style={styles.separating_bar}>People Nearby</Text>
      <NearbyPersonBox
        name="Celeste"
        interest_1="Cooking"
        interest_2="Hiking"
        interest_3="Alpine Skiing"
        is_flagged={true}
        is_student={true}
        is_vaccinated={false}
        is_verified={true}
        avatar={2}
        distance={500}
      ></NearbyPersonBox>
      <NearbyPersonBox
        name="Ezekiel"
        interest_1="Travelling"
        interest_2="Baseball"
        interest_3="Card Games"
        is_flagged={false}
        is_student={false}
        is_vaccinated={true}
        is_verified={true}
        avatar={1}
        distance={1000}
      ></NearbyPersonBox>
      <NearbyPersonBox
        name="Carlos"
        interest_1="Dance"
        interest_2="Jazz Music"
        interest_3="Sustainability"
        is_flagged={false}
        is_student={true}
        is_vaccinated={true}
        is_verified={true}
        avatar={4}
        distance={1200}
      ></NearbyPersonBox>
      <NearbyPersonBox
        name="Malika"
        interest_1="Acting"
        interest_2="Singing"
        interest_3="Enjoying new food spots"
        is_flagged={false}
        is_student={true}
        is_vaccinated={true}
        is_verified={true}
        avatar={3}
        distance={1500}
      ></NearbyPersonBox>
      <NearbyPersonBox
        name="Stephen"
        interest_1="Pokemon"
        interest_2="Gardening"
        interest_3="Collecting new gemstones"
        is_flagged={false}
        is_student={true}
        is_vaccinated={true}
        is_verified={false}
        avatar={1}
        distance={7000}
      ></NearbyPersonBox>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  separating_bar: { fontSize: 20, fontWeight: 'bold', padding: 10 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    height: 1,
    width: '80%',
  },
});
