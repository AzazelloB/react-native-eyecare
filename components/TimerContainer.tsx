import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, getTime } from '../helpers';

export default function TimerContainer() {
    const timerInitial = { m: 1, s: 0 };

    const [isRunning, setRunning] = useState(false);
    const [timer, setTimer] = useState(timerInitial);
    const [isRelaxing, setRelaxing] = useState(false);

    useEffect(() => {
        let interval = null; 

        if (isRunning) {
            interval = setInterval(() => {
                setTimer(({ m, s }) => {
                    if (0 === s) {
                        --m;
                        s = 59;
                    }

                    --s;

                    if (0 === m && 0 === s) {
                        setRelaxing(bool => !bool);
                    }

                    return ({ m, s });
                });
            }, 100);
        } else {
            setTimer(timerInitial);
            clearInterval(interval);
        }
        
        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        setTimer(isRelaxing ? { m: 0, s: 20 } : timerInitial);



    }, [isRelaxing]);

    const onButtonStart = () => {
        setRunning(true);
    }

    const onButtonStop = () => {
        setRunning(false);
    }

    return (
        <View style={styles.container}>
            {isRelaxing && <Text style={styles.text}>Look at something 20 meters away</Text>}

            <Text style={styles.timerText}>{ getTime(timer) }</Text>

            <View style={styles.buttonContainter}>
                <TouchableOpacity
                    onPress={onButtonStart}
                    activeOpacity={0.6}
                    disabled={isRunning}
                    style={[styles.button, { backgroundColor: isRunning ? COLORS.secondary20 : COLORS.secondary22 }]}
                >
            
                    <Text style={styles.buttonText}>START</Text>
            
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onButtonStop}
                    activeOpacity={0.6}
                    style={styles.button}
                >
            
                    <Text style={styles.buttonText}>STOP</Text>
            
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    text: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 30,
        paddingBottom: 7,
    },
    buttonContainter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingBottom: 15,
    },
    button: {
        flexBasis: '40%',
        padding: 10,
        backgroundColor: COLORS.secondary22,
        borderRadius: 3,
    },
    buttonText: {
        textAlign: 'center',
        color: COLORS.white,
    },
    timerText: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 65,
        paddingTop: 20,
        paddingBottom: 20,
    },
});