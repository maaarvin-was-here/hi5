import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

type NearbyPersonBoxProps = {
  name: string;
  interest_1: string;
  interest_2: string;
  interest_3: string;
  is_flagged: boolean;
  is_student: boolean;
  is_vaccinated: boolean;
  is_verified: boolean;
  avatar: number;
};

export function renderSwitch(avatar: number) {
  switch (avatar) {
    case 1:
      return require('../assets/images/avatar_1.png');
    case 2:
      return require('../assets/images/avatar_2.png');
    case 3:
      return require('../assets/images/avatar_3.png');
    default:
      return require('../assets/images/avatar_4.png');
  }
}

export default function NearbyPersonBox(props: NearbyPersonBoxProps) {
  const {
    name,
    interest_1,
    interest_2,
    interest_3,
    is_flagged,
    is_student,
    is_vaccinated,
    is_verified,
    avatar,
  } = props;
  var flag = is_flagged
    ? require('../assets/images/red-flag.png')
    : require('../assets/images/green-flag.png');
  var student = is_student
    ? require('../assets/images/green-student.png')
    : require('../assets/images/red-student.png');
  var covid = is_vaccinated
    ? require('../assets/images/green-covid.png')
    : require('../assets/images/red-covid.png');
  var phone = is_verified
    ? require('../assets/images/green-phone.png')
    : require('../assets/images/red-phone.png');
  var pic = renderSwitch(avatar);
  return (
    <View style={styles.outer_box}>
      <Text>
        <View style={styles.container}>
          <Image source={pic} style={{ width: 80, height: 80 }} />
          <View style={styles.verification_icon_row}>
            <Image source={covid} style={styles.verification_icon} />
            <Image source={student} style={styles.verification_icon} />
            <Image source={phone} style={styles.verification_icon} />
            <Image source={flag} style={styles.verification_icon} />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.name}>
            {name}
            {'\n'}
          </Text>
          <Text style={styles.italic}>
            {'\u2022 '}
            {interest_1}
          </Text>
          <Text style={styles.italic}>
            {'\u2022 '}
            {interest_2}
          </Text>
          <Text style={styles.italic}>
            {'\u2022 '}
            {interest_3}
          </Text>
        </View>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ECECEC',
  },
  verification_icon_row: {
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
  },
  verification_icon: {
    marginRight: 1,
    width: 20,
    height: 20,
  },
  name: {
    marginTop: 10,
    marginBottom: -25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  outer_box: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    margin: 5,
  },
  italic: { fontStyle: 'italic' },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});