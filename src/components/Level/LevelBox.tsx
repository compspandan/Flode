import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface LevelBoxProps {
    num: number;
    desc: string;
    locked: boolean;
    navigate: (screenName: string, props: { level: number }) => void;
    toggleOverlay: () => void;
}

const LevelBox: React.FC<LevelBoxProps> = ({
    num,
    desc,
    locked,
    toggleOverlay,
    navigate,
}) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                    if (locked) {
                        toggleOverlay();
                    } else {
                        navigate('Game', {
                            level: num,
                        });
                    }
                }}
            >
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
                                    style={{
                                        textAlign: 'center',
                                        marginTop: 2.5,
                                    }}
                                    color="#fff"
                                />
                            )}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
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
