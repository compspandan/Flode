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
        snapPoints: [0, FOOTER_HEIGHT - HEIGHT],
        config,
    });

    return (
        <>
            <PanGestureHandler {...gestureHandler}>
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
            </PanGestureHandler>
            <Animated.View style={[{ transform: [{ translateY }] }]}>
                <LinearGradient
                    style={styles.cardsView}
                    colors={gradientColors}
                />
            </Animated.View>
        </>
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
    trashBox: {
        width: WIDTH / 6,
        backgroundColor: '#e94560',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
    cardsView: {
        height: HEIGHT - FOOTER_HEIGHT,
    },
});

export default Footer;
