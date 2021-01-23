import { AntDesign, Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';

import CodeBlock from '../components/FlowChart/CodeBlock';
import { Block, positionInterface } from '../components/FlowChart/config';
import Footer, { TOTAL_FOOTER_HEIGHT } from '../components/Game/Footer';
import Intermediate from '../components/Game/Intermediate';
import { Placeholder } from '../components/Placeholder/Placeholder';
import { ICodeBlock, problems } from '../gameData';
import { NavProps } from '../ParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderModal from '../components/Game/HeaderModal';

const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

const Game: React.FC<NavProps<'Game'>> = ({ navigation, route }) => {
    const { level } = route.params;
    const [show, toggle] = useState(true);
    const {
        problemStatement,
        initBlocks,
        placeHolderDetails,
        validation,
      } = problems[level - 1];

    useEffect(() => {
        const interval = setInterval(() => {
            toggle(false);
            clearInterval(interval);
        }, 3000);

        return () => clearInterval(interval);
    });

    const scrollView = useAnimatedRef<Animated.ScrollView>();

    const scrollY = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset: { y } }) => {
            scrollY.value = y;
        },
    });

    const [pHDetails, setPHDetails] = useState<{ decision: boolean }[]>(
          placeHolderDetails
      );

    const [cBPos, setCBPos] = useState(
      Object.assign(
          {},
          ...initBlocks.map((elem, index: number) => ({ [elem.id]: index }))
      ))

    const [cBDetails, setCBDetails] = useState<ICodeBlock[]>(initBlocks);

    const position = useSharedValue<positionInterface>(cBPos);

    function guidGenerator() {
        //function to generate unique ids for codeblocks
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0)
                .toString(16)
                .substring(1);
        };
        return (
            S4() + S4() +'-' +S4() +'-' +S4() +'-' +S4() +'-' +S4() +S4() +S4()
        );
    }

    const onCircleLongPress = (x: keyof Block) => {
        const code = x.toString().toUpperCase();
        const i = cBDetails.length;
        const id = guidGenerator()
        setPHDetails([...pHDetails, { decision: false }]);
        setCBPos({ ...position.value, [id]: i }); //don't switch orders
        setCBDetails([...cBDetails, { blockType: x, code: code, id: id }]);
    };

  const deleteLastCB = ()=>{
        const i = cBDetails.length - 1
        const idToDelete = Object.keys(position.value).find((key)=>{
            return position.value[key] === i
        })
        const x = cBDetails.filter((elem)=>{
            return elem.id !== idToDelete
        })
        setCBDetails(x)
        console.log(x)
        setCBPos(Object.assign(
            {},
            ...x.map((elem, index: number) => ({ [elem.id]: index }))
        ))
        pHDetails.pop()
        setPHDetails(pHDetails)
    }
    
    if (show)
        return (
            <Intermediate problemStatement={problemStatement} level={level} />
        );

    function Display()
    {
        console.log(cBPos)
    }
    return (
        <SafeAreaView>
            {Display()}
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
            <HeaderModal level={level} navigation={navigation} position={position} validation={validation}/>
            <Footer onCircleLongPress={onCircleLongPress} deleteLastCB={deleteLastCB}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeScreen: {},
    gameArea: {
        height: WINDOW_HEIGHT - TOTAL_FOOTER_HEIGHT,
        paddingTop: WINDOW_HEIGHT / 25,
    }
});

export default Game;
