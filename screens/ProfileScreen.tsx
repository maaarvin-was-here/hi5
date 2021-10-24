import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProfileScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', height: 700 }}>
            {/* Avatar Image */}
            <Image style={styles.avatar} source={require('../assets/images/avatar_5.png/')} />

            {/* User's Name */}
            <Text style={styles.title}>Angie</Text>

            {/* Bar of Icons */}
            <View style={styles.iconBar}>
                <Image style={styles.icon} source={require('../assets/images/green-covid.png/')} />
                <Image style={styles.icon} source={require('../assets/images/green-student.png/')} />
                <Image style={styles.icon} source={require('../assets/images/green-phone.png/')} />
                <Image style={styles.icon} source={require('../assets/images/green-flag.png/')} />
            </View>

            {/* Pronouns + Age */}
            <View style={styles.quickInfo}>
                <Text style={styles.quickInfoText}>she/her</Text>
                <Text style={styles.quickInfoText}>22</Text>
            </View>

            {/* COVID Status/Preferences */}
            <View style={styles.covidStatus}>
                {/* COVID Box Title */}
                <View style={styles.covidSubtitle}>
                    <Text style={[styles.subtitle, { marginTop: '4%' }]}>COVID-19 Comfort</Text>
                </View>
                {/* COVID Box Contents */}
                <View style={styles.subgrid2}>
                    {/* Left Division */}
                    <View style={styles.covidLeft}>
                        <Text style={styles.maskText}>Mask?</Text>
                        <Image style={styles.smallicon} source={require('../assets/images/check-circle.png/')} />
                    </View>
                    {/* Right Division */}
                    <Text style={styles.covidRight}>I feel okay meeting outside for coffee or food</Text>
                </View>
            </View>

            {/* Interests Section */}
            <View style={styles.interestBar}>
                <Text style={[styles.subtitle, { marginTop: '5%', color: 'black' }]}>Interests</Text>
                <Text style={styles.interestText}>{'\u25FE'} My 2 adorable dogs</Text>
                <Text style={styles.interestText}>{'\u25FE'} Photography</Text>
                <Text style={styles.interestText}>{'\u25FE'} Reading fantasy novels</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0.03 * windowHeight, /* 20 */
        backgroundColor: 'white'
    },
    avatar: {
        width: 0.4 * windowWidth,
        height: 0.4 * windowWidth,
        marginVertical: 0.0225 * windowHeight, /* 15 */
    },
    title: {
        fontSize: 0.07 * windowWidth,
        fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 0.045 * windowWidth,
    },
    iconBar: {
        marginTop: 0.015 * windowHeight,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '60%'
    },
    icon: {
        flex: 1,
        width: 0.07 * windowWidth,
        height: 0.12 * windowWidth,
        marginHorizontal: 5
    },
    smallicon: {
        width: 20,
        height: 20,
        marginTop: '12%',
        marginBottom: '11%',
        marginLeft: '5%',
        marginRight: '12%'
    },
    quickInfo: {
        marginVertical: 0.0225 * windowHeight, /* 15 */
        flexDirection: 'row',
        width: '40%',
        backgroundColor: 'white'
    },
    quickInfoText: {
        flex: 1,
        textAlign: 'center',
        color: 'black',
        fontSize: 0.03 * windowHeight,
        fontWeight: '600'
    },
    subgrid2: {
        alignContent: 'center',
        marginVertical: 0.0225 * windowHeight, /* 15 */
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#e0b0ff',
        borderRadius: 0.5 * windowWidth
    },
    covidStatus: {
        marginTop: 0.03 * windowHeight,
        width: '90%',
        height: '20%',
        backgroundColor: '#e0b0ff',
        borderRadius: 0.08 * windowWidth
    },
    covidSubtitle: {
        height: 0.07 * windowHeight,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        backgroundColor: '#e0b0ff',
        borderRadius: 0.07 * windowWidth
    },
    covidLeft: {
        alignContent: 'center',
        width: '43%',
        borderRightWidth: 2,
        borderColor: 'white',
        backgroundColor: '#e0b0ff',
        borderBottomLeftRadius: 0.8 * windowWidth,
        flex: 2,
        flexDirection: 'row'
    },
    maskText: {
        flex: 2,
        textAlign: 'right',
        backgroundColor: '#e0b0ff',
        alignItems: 'center',
        fontSize: 0.0425 * windowWidth,
        marginTop: '12%',
        marginBottom: '10%'
    },
    covidRight: {
        flex: 3,
        textAlign: 'center',
        fontSize: 0.0425 * windowWidth
    },
    interestBar: {
        marginVertical: 0.03 * windowHeight, /* 20 */
        width: '75%',
        height: '30%',
        backgroundColor: '#ececec',
        borderRadius: 0.07 * windowWidth
    },
    interestText: {
        color: 'black',
        marginLeft: '10%',
        marginTop: '6%',
        letterSpacing: 1.2
    }
});


/* < View style = { styles.separator } lightColor = "#eee" darkColor = "rgba(255,255,255,0.1)" />  */