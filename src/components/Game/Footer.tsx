import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { usePanGestureHandler, withSpring } from 'react-native-redash/src/v1';
import FooterIcon from './FooterIcon';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
const FOOTER_HEIGHT = HEIGHT / 12;
const ACTION_BTN_WIDTH = WIDTH / 7;
const FLOATING_SWIPE_UP_BAR_WIDTH = HEIGHT / 40;
export const TOTAL_FOOTER_HEIGHT = FOOTER_HEIGHT + FLOATING_SWIPE_UP_BAR_WIDTH;

// https://uigradients.com/#Lawrencium
const gradientColors = ['#0f0c29', '#302b63', '#24243e'];

const Footer = () => {
    const {
        gestureHandler,
        state,
        translation,
        velocity,
    } = usePanGestureHandler();

    const config = {
        damping: 15,
        mass: 1,
        stiffness: 175,
        overshootClamping: true,
        restSpeedThreshold: 0.1,
        restDisplacementThreshold: 0.1,
    };

    const translateY = withSpring({
        state,
        velocity: velocity.y,
        value: translation.y,
        snapPoints: [0, TOTAL_FOOTER_HEIGHT - HEIGHT],
        config,
    });

    return (
        <View>
            <PanGestureHandler {...gestureHandler}>
                <Animated.View
                    style={[styles.bar_view, { transform: [{ translateY }] }]}
                >
                    <View style={styles.bar} />
                </Animated.View>
            </PanGestureHandler>
            <Animated.View
                style={[styles.foot, { transform: [{ translateY }] }]}
            >
                <ScrollView horizontal={true}>
                    <FooterIcon color="white" />
                    <FooterIcon color="red" />
                    <FooterIcon color="green" />
                    <FooterIcon color="yellow" />
                    <FooterIcon color="white" />
                    <FooterIcon color="white" />
                    <FooterIcon color="white" />
                    <FooterIcon color="white" />
                    <FooterIcon color="white" />
                </ScrollView>
                <View style={styles.trashBox}>
                    <Entypo
                        name="trash"
                        size={24}
                        color="white"
                        style={styles.trash}
                    />
                </View>
            </Animated.View>
            <Animated.View style={{ transform: [{ translateY }] }}>
                <LinearGradient
                    style={styles.cardsView}
                    colors={gradientColors}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    foot: {
        width: WIDTH,
        height: FOOTER_HEIGHT,
        backgroundColor: '#16213E',
        display: 'flex',
        flexDirection: 'row',
    },
    trash: {
        textAlign: 'center',
    },
    enableSwipe: {
        width: ACTION_BTN_WIDTH,
        height: FOOTER_HEIGHT,
        backgroundColor: '#e94560',
        display: 'flex',
        justifyContent: 'center',
    },
    trashBox: {
        width: ACTION_BTN_WIDTH,
        height: FOOTER_HEIGHT,
        backgroundColor: '#e94560',
        display: 'flex',
        justifyContent: 'center',
    },
    cardsView: {
        height: HEIGHT - FOOTER_HEIGHT,
    },
    bar_view: {
        height: FLOATING_SWIPE_UP_BAR_WIDTH,
        width: '100%',
        marginBottom: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bar: {
        backgroundColor: '#403f3c',
        width: '30%',
        borderRadius: 10,
        height: FLOATING_SWIPE_UP_BAR_WIDTH / 3,
    },
});

export default Footer;
