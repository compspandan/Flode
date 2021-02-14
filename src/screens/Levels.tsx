import React, { useState } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Level/Header';
import LevelBox from '../components/Level/LevelBox';
import LockedOverlay from '../components/Level/LockedOverlay';
import { levelData } from '../gameData';
import { NavProps } from '../ParamList';

const { height } = Dimensions.get('screen');

const Levels: React.FC<NavProps<'Levels'>> = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => setVisible(!visible);

    return (
        <SafeAreaView>
            <Header goBack={navigation.goBack} />
            <ScrollView style={styles.container}>
                {levelData.map((data, dex) => (
                    <View key={`level-row-${dex + 1}`} style={styles.row}>
                        {data.map((level, dex) => (
                            <TouchableOpacity
                                activeOpacity={0.6}
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
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </ScrollView>
            <LockedOverlay toggleOverlay={toggleOverlay} visible={visible} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        height: height * 0.9,
    },
    row: {
        marginVertical: 15,
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
});

export default Levels;
