import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Level/Header';
import LevelBox from '../components/Level/LevelBox';
import LockedOverlay from '../components/Level/LockedOverlay';
import { NavProps } from '../ParamList';

const { height } = Dimensions.get('screen');

const levelData = [
    [
        {
            desc: 'Intro',
            num: 1,
            locked: false,
        },
        {
            desc: 'Input / Output',
            num: 2,
            locked: false,
        },
        {
            desc: 'Conditionals',
            num: 3,
            locked: false,
        },
    ],
    [
        {
            desc: 'Intro',
            num: 4,
            locked: false,
        },
        {
            desc: 'Input / Output',
            num: 5,
            locked: false,
        },
        {
            desc: 'Conditionals',
            num: 6,
            locked: false,
        },
    ],
    [
        {
            desc: 'Intro',
            num: 4,
            locked: true,
        },
        {
            desc: 'Input / Output',
            num: 5,
            locked: true,
        },
        {
            desc: 'Conditionals',
            num: 6,
            locked: true,
        },
    ],
    [
        {
            desc: 'Intro',
            num: 4,
            locked: true,
        },
        {
            desc: 'Input / Output',
            num: 5,
            locked: true,
        },
        {
            desc: 'Conditionals',
            num: 6,
            locked: true,
        },
    ],
    [
        {
            desc: 'Intro',
            num: 4,
            locked: true,
        },
        {
            desc: 'Input / Output',
            num: 5,
            locked: true,
        },
        {
            desc: 'Conditionals',
            num: 6,
            locked: true,
        },
    ],
];

const Levels: React.FC<NavProps<'Levels'>> = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <SafeAreaView>
            <Header goBack={navigation.goBack} />
            <View style={styles.container}>
                {levelData.map((data, dex) => (
                    <View key={`level-row-${dex + 1}`} style={styles.row}>
                        {data.map((level, dex) => (
                            <TouchableWithoutFeedback
                                key={`level-${dex + 1}`}
                                onPress={() => {
                                    if (level.locked) {
                                        toggleOverlay();
                                    } else {
                                        navigation.navigate('Game', {
                                            level: level.num,
                                        });
                                    }
                                }}
                            >
                                <LevelBox level={level} />
                            </TouchableWithoutFeedback>
                        ))}
                    </View>
                ))}
            </View>
            <LockedOverlay toggleOverlay={toggleOverlay} visible={visible} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        height: height - height / 14,
    },
    row: {
        marginVertical: 14,
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
});

export default Levels;
