import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import CodeBlock from '../components/FlowChart/CodeBlock';
import { code_blocks, positionInterface } from '../components/FlowChart/config';
import Footer, { TOTAL_FOOTER_HEIGHT } from '../components/Game/Footer';
import Intermediate from '../components/Game/Intermediate';
import { details } from '../components/Placeholder/PHDetails.json';
import { Placeholder } from '../components/Placeholder/Placeholder';
import { NavProps } from '../ParamList';

const { height: WINDOW_HEIGHT } = Dimensions.get('window');

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

    const scrollView = useAnimatedRef<Animated.ScrollView>();

    const scrollY = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset: { y } }) => {
            scrollY.value = y;
        },
    });

    const [cBPos,setCBPos] = useState(Object.assign(  //setCBPos(position.value) before changing state of any hook
        {},
        ...code_blocks.map((elem, index: number) => ({ [elem.id]: index }))
    ));

    const position = useSharedValue<positionInterface>(cBPos);

    if (show) return <Intermediate level={level} />;

    return (
        <SafeAreaView>
            <Animated.ScrollView
                ref={scrollView}
                onScroll={onScroll}
                style={styles.gameArea}
            >
                {code_blocks.map((elem, index: number) => {
                    return (
                        <CodeBlock
                            blockType={elem.blockType}
                            code={elem.code}
                            id={elem.id}
                            positions={position}
                            key={index}
                            scrollY={scrollY}
                            scrollView={scrollView}
                        />
                    );
                })}

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
                <View style={{ marginBottom: WINDOW_HEIGHT / 12 }}></View>
            </Animated.ScrollView>
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    gameArea: {
        height: WINDOW_HEIGHT - TOTAL_FOOTER_HEIGHT,
        paddingTop: WINDOW_HEIGHT / 25,
    },
});

export default Game;
