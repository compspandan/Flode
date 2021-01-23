import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');
const { cond, eq, add, call, set, Value, event, block } = Animated;

type Block = {
    start: String;
    io: String;
    exec: String;
    cond: String;
    end: String;
    loop: String;
};

type CodeBlockProps = {
    code: String;
    blockType: keyof Block;
    order: number;
};

const SIZE = 70;
const INIT_Y = 77.5;

const colors = {
    start: ['#fc4a1a', '#f7b733'],
    io: ['#0575e6', '#021b79'],
    exec: ['#ed213a', '#93291e'],
    cond: ['#ff0099', '#493240'],
    end: ['#fc4a1a', '#f7b733'],
    loop: ['#093028', '#237a57'],
};


const CodeBlock: React.FC<CodeBlockProps> = ({ code, blockType, order }) => {
    const dragX = new Value(0);
    const dragY: Animated.Value<number> = new Value(0);
    const gestureState: Animated.Value<number> = new Value(-1);
    const offsetX = new Value(width / 2.4);
    const offsetY: Animated.Value<number> = new Value(INIT_Y);

    const onGestureEvent = event([
        {
            nativeEvent: {
                translationX: dragX,
                translationY: dragY,
                state: gestureState,
            },
        },
    ]);

    const onDrop = ([x, y]: readonly number[]) => {
        //   alert(`You dropped at ${x} ${y}`);
        // console.log(x,y)
    };

    const translateX = cond(
        eq(gestureState, State.ACTIVE),
        add(offsetX, dragX),
        offsetX
    );

    const findPosition = ([offY, drgY]: readonly number[]) => {
        const modValue = height / 10 + 65;
        const v = Math.floor(Math.abs(offY + drgY - INIT_Y) / modValue);
        const pos = v * modValue + INIT_Y;
        offsetY.setValue(pos);
        dragY.setValue(0);
        gestureState.setValue(-1);
    };

    const translateY = block([
        cond(eq(gestureState, State.END), [
            call([offsetY, dragY], findPosition),
        ]),
        cond(
            eq(gestureState, State.ACTIVE),
            add(offsetY, dragY),
            set(offsetY, add(offsetY, dragY))
        ),
    ]);

    return (
        <>
            <Animated.Code>
                {() =>
                    cond(
                        eq(gestureState, State.ACTIVE),
                        call([dragX, dragY], onDrop)
                    )
                }
            </Animated.Code>
            <PanGestureHandler
                maxPointers={1}
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onGestureEvent}
            >
                <Animated.View
                    style={[
                        styles.codeBlock,
                        {
                            transform: [
                                { translateX: translateX },
                                { translateY: translateY },
                            ],
                        },
                    ]}
                >
                    <LinearGradient
                        colors={colors[blockType]}
                        style={[
                            styles.gradient,
                            {
                                borderRadius:
                                    blockType === 'start' || blockType === 'end'
                                        ? SIZE / 2
                                        : 0,
                            },
                        ]}
                    >
                        <Text style={styles.codeText}>{code}</Text>
                    </LinearGradient>
                </Animated.View>
            </PanGestureHandler>
        </>
    );
};

const styles = StyleSheet.create({
    codeBlock: {
        marginLeft: -(SIZE / 2),
        marginTop: -(SIZE / 2),
        width: SIZE * 2,
        height: SIZE,
        borderColor: '#000',
        zIndex: 1,
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    codeText: {
        fontSize: 17.5,
        textAlign: 'center',
        color: 'white',
    },
});

export default CodeBlock;