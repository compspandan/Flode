import React, { useEffect, useState } from 'react';
import { Dimensions, View,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Intermediate from '../components/Game/Intermediate';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Game/Footer';
import { CenterText } from '../components/Text';
import { NavProps } from '../ParamList';
import { details } from '../components/Placeholder/PHDetails.json';
import { Placeholder } from '../components/Placeholder/Placeholder';
import CodeBlock from '../components/FlowChart/CodeBlock';

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
            <ScrollView style={styles.gameArea}>
                <CodeBlock blockType="start" code="START" order={0} />
                {details.map((elem, index) => {
                    return (
                        <Placeholder
                            key={index}
                            id={index}
                            last={elem.last}
                            decision={elem.decision}
                        />
                    );
                })}
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    gameArea: {
        height: height - height / 12,
    },
});


export default Game;
