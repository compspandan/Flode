import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface LevelBoxProps {
    level: {
        num: number;
        desc: string;
        locked: boolean;
    };
}

const LevelBox: React.FC<LevelBoxProps> = ({ level }) => {
    const { desc, num, locked } = level;

    return (
        <View style={styles.box}>
            <Text style={styles.desc}>{desc}</Text>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                <View style={styles.numBox}>
                    {!locked ? (
                        <Text style={styles.num}>{num}</Text>
                    ) : (
                        <AntDesign
                            name="lock1"
                            size={18.5}
                            style={{ textAlign: 'center', marginTop: 2.5 }}
                            color="#fff"
                        />
                    )}
                </View>
            </View>
        </View>
    );
};

const BOX_SIZE = 120;

const styles = StyleSheet.create({
    box: {
        margin: 5,
        width: BOX_SIZE,
        height: BOX_SIZE,
        backgroundColor: '#0F3460',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    locked: {
        textAlign: 'center',
    },
    num: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18.5,
    },
    desc: {
        fontSize: 15,
        marginTop: 10,
        textAlign: 'center',
        color: '#fff',
    },
    numBox: {
        width: 30,
        height: 30,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#e94560',
    },
});

export default LevelBox;
