import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text} from 'react-native';
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import CodeBlock from '../components/FlowChart/CodeBlock';
import { Block, code_blocks, positionInterface } from '../components/FlowChart/config';
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

    const [cBDetails,setCBDetails] = useState(code_blocks)

    const [cBPos,setCBPos] = useState(Object.assign(
        {},
        ...code_blocks.map((elem, index: number) => ({ [elem.id]: index }))
    ));

    const position = useSharedValue<positionInterface>(cBPos);

    const [pHDetails, setPHDetails] = useState(details);

    const onCircleLongPress = (x:keyof Block) => {
        const code = x.toString().toUpperCase();
        const i =  cBDetails.length
        const id = "code"+i.toString();
        setPHDetails([...pHDetails, { decision: false }]);
        setCBPos({...position.value,[id]:i})  //don't switch orders
        setCBDetails([...cBDetails,{blockType:x,code:code,id:id}])
    };

    if (show) return <Intermediate level={level} />;

    return (
        <SafeAreaView>
            <Animated.ScrollView
                ref={scrollView}
                onScroll={onScroll}
                style={styles.gameArea}
            >
                {cBDetails.map((elem, index: number) => {
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

                {pHDetails.map(({ decision }, dex) => (
                    <Placeholder
                        key={dex}
                        id={dex}
                        decision={decision}
                        last={dex + 1 === pHDetails.length}
                    />
                ))}
                <View style={{ marginBottom: WINDOW_HEIGHT / 12 }} />
            </Animated.ScrollView>
            <Footer onCircleLongPress={onCircleLongPress} />
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
