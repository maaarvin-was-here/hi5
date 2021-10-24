import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Platform, StyleSheet, Switch } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ModalScreen() {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={styles.title}>Options</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.toggleSection}>
                    <Text style={styles.toggleEntry}>Online Status</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "#E7E7E7", true: "#E7E7E7" }}
                        thumbColor={isEnabled1 ? "#73D6D8" : "#f4f3f4"}
                        ios_backgroundColor="white"
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                </View>
                <View style={styles.toggleSection}>
                    <Text style={styles.toggleEntry}>Read Receipts</Text>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "#E7E7E7", true: "#E7E7E7" }}
                        thumbColor={isEnabled2 ? "#73D6D8" : "#f4f3f4"}
                        ios_backgroundColor="white"
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                    />
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.entry}>Past Matches</Text>
                <Text style={styles.entry}>Edit Profile</Text>
                <Text style={styles.entry}>Connect Accounts</Text>
            </View>
            <View style={styles.baresection}>
                <Text style={styles.entry}>Support</Text>
            </View>
            <View style={styles.doneButton}>
                <Text style={styles.buttonText}>Done</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        color: 'black',
        backgroundColor: 'white'
    },
    section: {
        borderBottomWidth: 5,
        borderBottomColor: 'black',
        marginBottom: 28,
        backgroundColor: 'white',
        width: '80%'
    },
    toggleSection: {
        backgroundColor: '#e0b0ff',
        alignItems: 'center',
        fontSize: 24,
        marginTop: '12%',
        marginBottom: '10%',
        flex: 1,
        flexDirection: 'row',
    },
    baresection: {
        backgroundColor: 'white',
        width: '80%'
    },
    toggleEntry: {
        flex: 4,
        color: 'black',
        alignContent: 'flex-start',
        backgroundColor: 'white',
        fontSize: 24,
        height: 28,
        left: 0,
        marginBottom: 28,
    },
    switch: {
        flex: 1,
        marginBottom: 28,
        alignContent: "flex-end",
    },
    entry: {
        color: 'black',
        backgroundColor: 'white',
        paddingBottom: 28,
        fontSize: 24,
        paddingLeft: -100,
    },
    doneButton: {
        width: '90%',
        height: '10%',
        borderRadius: 60,
        backgroundColor: '#73D6D8'
    },
    buttonText: {
        flex: 1,
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 13
    }
});
