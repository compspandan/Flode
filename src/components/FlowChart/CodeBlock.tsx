import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
    Easing,
    scrollTo,
    useAnimatedGestureHandler,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../FlowChart/config';
import { ARROW_HEIGHT, BOX_HEIGHT } from '../Placeholder/Placeholder';
import { CodeBlockProps } from './config';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const animationConfig = {
    easing: Easing.inOut(Easing.ease),
    duration: 350,
};

const SIZE = WIDTH / 5.6;
const TOP_ADJUSTMENT = (BOX_HEIGHT - SIZE) / 2 + 0.05 * SIZE;

const getPosition = (order: number, inset: EdgeInsets) => {
    'worklet';
    const INIT_Y = inset.top + TOP_ADJUSTMENT;
    return {
        x: WIDTH / 2.4,
        y: order * (BOX_HEIGHT + ARROW_HEIGHT) + INIT_Y,
    };
};

const getOrder = (y: number, inset: EdgeInsets, order: number) => {
    'worklet';
    const INIT_Y = inset.top + TOP_ADJUSTMENT - ARROW_HEIGHT / 2;
    return Math.floor(Math.abs(y - INIT_Y) / (BOX_HEIGHT + ARROW_HEIGHT));
};

const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    blockType,
    id,
    positions,
    scrollView,
    scrollY,
}) => {
    const inset = useSafeAreaInsets();
    const containerHeight = HEIGHT - inset.top - inset.bottom;
    const contentHeight =
        Math.max(Object.keys(positions.value).length, 6) *
            (BOX_HEIGHT + ARROW_HEIGHT) +
        HEIGHT / 12;

    const position = getPosition(positions.value[id], inset);
    const translateX = useSharedValue(position.x);
    const translateY = useSharedValue(position.y);
    const isGestureActive = useSharedValue(false);

    useAnimatedReaction(
        () => positions.value[id],
        (newOrder) => {
            const pos = getPosition(newOrder, inset);
            translateX.value = withTiming(pos.x, animationConfig);
            translateY.value = withTiming(pos.y, animationConfig);
        }
    );

    const onGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { x: number; y: number }
    >({
        onStart: (_, ctx) => {
            ctx.x = translateX.value; // ctx.x and ctx.y is similar to offsetX,offsetY ie orinal pos of object before moving
            ctx.y = translateY.value;
            isGestureActive.value = true;
        },
        onActive: ({ translationX, translationY }, ctx) => {
            translateX.value = ctx.x + translationX; // translationX is similar to dragX
            translateY.value = ctx.y + translationY;
            const oldOrder = positions.value[id];
            const newOrder = getOrder(translateY.value, inset, oldOrder);
            if (oldOrder !== newOrder) {
                const idToSwap = Object.keys(positions.value).find((key) => {
                    return positions.value[key] === newOrder;
                });
                if (idToSwap) {
                    const newPositions = JSON.parse(
                        JSON.stringify(positions.value)
                    );
                    newPositions[id] = newOrder;
                    newPositions[idToSwap] = oldOrder;
                    positions.value = newPositions;
                }
            }

            // for scrolling
            const lowerBound = scrollY.value;
            const upperBound = lowerBound + containerHeight - BOX_HEIGHT;
            const maxScroll = contentHeight - containerHeight;
            const leftToScrollDown = maxScroll - scrollY.value;

            if (translateY.value > upperBound) {
                const diff = Math.min(
                    translateY.value - upperBound,
                    leftToScrollDown
                );
                scrollY.value += diff;
                scrollTo(scrollView, 0, scrollY.value, false);
                ctx.y += diff;
                translateY.value = ctx.y + translationY;
            }
            if (translateY.value < lowerBound) {
                const diff = Math.min(
                    lowerBound - translateY.value,
                    lowerBound
                );
                scrollY.value -= diff;
                scrollTo(scrollView, 0, scrollY.value, false);
                ctx.y -= diff;
                translateY.value = ctx.y + translationY;
            }
        },

        onEnd: () => {
            const destination = getPosition(positions.value[id], inset);
            translateX.value = withTiming(
                destination.x,
                animationConfig,
                () => (isGestureActive.value = false)
            );
            translateY.value = withTiming(destination.y, animationConfig);
        },
    });

    const transformStyle = useAnimatedStyle(() => {
        const zIndex = isGestureActive.value ? 100 : 1;
        const scale = isGestureActive.value ? 1.05 : 1;
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
                { scale },
            ],
            zIndex: zIndex,
        };
    });

    return (
        <View>
            <PanGestureHandler maxPointers={1} onGestureEvent={onGestureEvent}>
                <Animated.View style={[styles.codeBlock, transformStyle]}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    codeBlock: {
        position: 'absolute',
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
