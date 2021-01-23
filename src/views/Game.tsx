import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import CodeBlock from '../components/FlowChart/CodeBlock';
import { Block, positionInterface } from '../components/FlowChart/config';
import Footer, { TOTAL_FOOTER_HEIGHT } from '../components/Game/Footer';
import HeaderModal from '../components/Game/HeaderModal';
import Intermediate from '../components/Game/Intermediate';
import { Placeholder } from '../components/Placeholder/Placeholder';
import { IBlockID, ICodeBlock, problems } from '../gameData';
import { NavProps } from '../ParamList';
import _ from 'lodash';
const { height: WINDOW_HEIGHT } = Dimensions.get('window');

const Game: React.FC<NavProps<'Game'>> = ({ navigation, route }) => {
    const { level } = route.params;
    const [show, toggle] = useState(true);
    const {
        problemStatement,
        initBlocks,
        placeHolderDetails,
        validation,
        desc,
        cardData,
        footerIcons
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
            ...initBlocks.map(({ blockID, uid }, index: number) => {
                return { [blockID + '?' + uid]: index };
            })
        )
    );

    const [cBDetails, setCBDetails] = useState<ICodeBlock[]>(
        initBlocks.map(({ blockID, blockType, code, uid }) => {
            return {
                blockID,
                blockType,
                code,
                uid: blockID + '?' + uid,
            };
        })
    );

    const position = useSharedValue<positionInterface>(cBPos);

    const onCircleLongPress = (
        blockType: keyof Block,
        blockID: keyof IBlockID,
        code: string
    ) => {
        const i = cBDetails.length;
        const uid = guidGenerator();
        setPHDetails([...pHDetails, { decision: false }]);
        setCBPos({ ...position.value, [blockID + '?' + uid]: i }); // don't switch orders
        setCBDetails([
            ...cBDetails,
            { blockType, code, uid: blockID + '?' + uid, blockID },
        ]);
    };

    function guidGenerator() {
        //function to generate unique ids for codeblocks
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0)
                .toString(16)
                .substring(1);
        };
        return (
            S4() +
            S4() +
            '-' +
            S4() +
            '-' +
            S4() +
            '-' +
            S4() +
            '-' +
            S4() +
            S4() +
            S4()
        );
    }

    const deleteLastCB = () => {
        const i = cBDetails.length - 1;

        const idToDelete = Object.keys(position.value).find((key) => {
            return position.value[key] === i;
        });

        const x = cBDetails.filter(({ uid }) => uid !== idToDelete);

        setCBDetails(x);
        setCBPos(_.omit(position.value, [`${idToDelete}`]));
        pHDetails.pop();
        setPHDetails(pHDetails);
    };

    if (show)
        return (
            <Intermediate
                problemStatement={problemStatement}
                level={level}
                desc={desc}
            />
        );

    return (
        <SafeAreaView>
            <Animated.ScrollView
                ref={scrollView}
                onScroll={onScroll}
                style={styles.gameArea}
            >
                {cBDetails.map(({ blockType, code, uid }, index: number) => (
                    <CodeBlock
                        blockType={blockType}
                        code={code}
                        id={uid}
                        positions={position}
                        key={index}
                        scrollY={scrollY}
                        scrollView={scrollView}
                    />
                ))}

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
            <HeaderModal
                level={level}
                navigation={navigation}
                position={position}
                validation={validation}
            />
            <Footer
                onCircleLongPress={onCircleLongPress}
                deleteLastCB={deleteLastCB}
                cardData={cardData}
                footerIcons={footerIcons}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeScreen: {},
    gameArea: {
        height: WINDOW_HEIGHT - TOTAL_FOOTER_HEIGHT,
        paddingTop: WINDOW_HEIGHT / 25,
    },
});

export default Game;
