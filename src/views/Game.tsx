import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Intermediate from '../components/Game/Intermediate';
import Footer from '../components/Level/Footer';
import { CenterText } from '../components/Text';
import { NavProps } from '../ParamList';

const { height } = Dimensions.get('window');

const Game: React.FC<NavProps<'Game'>> = ({ route }) => {
    const { level } = route.params;
    const [show, toggle] = useState(true);

    useEffect(() => {

        const interval = setInterval(() => {
            toggle(false);
            clearInterval(interval);
        }, 5000);

        return () => clearInterval(interval);
    });

    if (show) {
        return <Intermediate level={level} />;
    }

    return (
        <SafeAreaView style={{ display: "flex", height: height }}>
            <CenterText>Level: {level}</CenterText>
            <View style={{ marginTop: "auto" }}>
                <Footer />
            </View>
        </SafeAreaView>
    );
};

export default Game;
