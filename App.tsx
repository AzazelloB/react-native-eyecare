import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimerContainer from './components/TimerContainer';

import { COLORS } from './helpers';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.article}>202020 Eyecare</Text>

            <TimerContainer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 40,
        backgroundColor: COLORS.primary0,
    },
    article: {
        color: COLORS.secondary21,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    }
});
