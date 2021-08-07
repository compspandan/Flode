import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Level/Header';
import LevelBox from '../components/Level/LevelBox';
import LockedOverlay from '../components/Level/LockedOverlay';
import { problems } from '../gameData';
import { NavProps } from '../ParamList';

const Levels: React.FC<NavProps<'Levels'>> = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => setVisible(!visible);

    const renderItem = ({ item }) => {
        const { locked, level, levelDesc } = item;
        return (
            <LevelBox
                desc={levelDesc}
                locked={locked}
                navigate={navigation.navigate}
                num={level}
                toggleOverlay={toggleOverlay}
            />
        );
    };

    return (
        <SafeAreaView>
            <Header goBack={navigation.goBack} />
            <FlatList
                style={styles.grid}
                data={problems}
                renderItem={renderItem}
                keyExtractor={(_, key) => `level-${key}`}
                numColumns={3}
                horizontal={false}
                contentContainerStyle={{ alignItems: 'center' }}
            />
            <LockedOverlay toggleOverlay={toggleOverlay} visible={visible} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    grid: {
        marginTop: 20,
    },
});

export default Levels;
