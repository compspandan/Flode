import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { usePanGestureHandler } from 'react-native-redash/src/v1';
import Card from './Card';
import { StyleSheet } from 'react-native';
import { ICard } from '../../gameData';

interface SwipeViewProps {
    cardData: ICard[];
}

const { cond, eq, call } = Animated;

const SwipeView: React.FC<SwipeViewProps> = ({ cardData: cards }) => {
    const [current, setCurrent] = useState<number>(0);
    const { blockType, desc, title } = cards[current];
    const {
        gestureHandler,
        state,
        translation: { x },
    } = usePanGestureHandler();

    const onEnd = ([x]: readonly number[]) => {
        if (x >= 20) {
            if (current === 0) setCurrent(cards.length - 1);
            else setCurrent(current - 1);
        } else if (x <= -20) {
            setCurrent((current + 1) % cards.length);
        }
        state.setValue(State.UNDETERMINED);
    };

    return (
        <>
            <Animated.Code>
                {() => cond(eq(state, State.END), call([x], onEnd))}
            </Animated.Code>
            <PanGestureHandler {...gestureHandler}>
                <Animated.View>
                    <Card blockType={blockType} desc={desc} title={title} />
                </Animated.View>
            </PanGestureHandler>
            <View>
                <Text style={styles.text}>
                    {current + 1} / {cards.length}
                </Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text: { color: '#F8F8FF', textAlign: 'center' },
});

export default SwipeView;
