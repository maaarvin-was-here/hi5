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
};

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
  } = props;
  var flag = is_flagged
    ? require('./img/red-flag.png')
    : require('./img/green-flag.png');
  var student = is_student
    ? require('./img/green-student.png')
    : require('./img/red-student.png');
  var covid = is_vaccinated
    ? require('./img/green-covid.png')
    : require('./img/red-covid.png');
  var phone = is_verified
    ? require('./img/green-phone.png')
    : require('./img/red-phone.png');
  return (
    <View style={styles.outer_box}>
      <Text>
        <View style={styles.container}>
          <Image
            source={require('./img/avatar_1.png')}
            style={{ width: 80, height: 80 }}
          />
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
