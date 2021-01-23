import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const { cond, eq, add, call, set, Value, event } = Animated;

const Arrow = () => {
    const dragX = new Value(0);
    const dragY = new Value(0);
    const gestureState = new Value(-1);
    const offsetX = new Value(width / 2);
    const offsetY = new Value(height / 2.5);

    const onGestureEvent = event([
        {
            nativeEvent: {
                translationX: dragX,
                translationY: dragY,
                state: gestureState,
            },
        },
    ]);

    const addY = add(offsetY, dragY);
    const addX = add(offsetX, dragX);

    const translateX = cond(
        eq(gestureState, State.ACTIVE),
        addX,
        set(offsetX, addX)
    );

    const translateY = cond(
        eq(gestureState, State.ACTIVE),
        addY,
        set(offsetY, addY)
    );

    const onDrop = ([x, y]: readonly number[]) => {
        //   alert(`You dropped at ${x} ${y}`);
    };

    return (
        <>
            <Animated.Code>
                {() =>
                    cond(
                        eq(gestureState, State.END),
                        call([addX, addY], onDrop)
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
                        {
                            transform: [{ translateX }, { translateY }],
                        },
                    ]}
                >
                    <FontAwesome
                        name={`long-arrow-down`}
                        size={64}
                        color="black"
                    />
                </Animated.View>
            </PanGestureHandler>
        </>
    );
};

export default Arrow;