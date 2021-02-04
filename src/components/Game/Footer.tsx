import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import {
    PanGestureHandler,
    TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { usePanGestureHandler, withSpring } from 'react-native-redash/src/v1';
import { IBlockID, ICard, IFooterIcon } from '../../gameData';
import { Block } from '../FlowChart/config';
import CardDataView from './CardDataView';
import FooterIcon from './FooterIcon';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
const FOOTER_HEIGHT = HEIGHT / 12;
const ACTION_BTN_WIDTH = WIDTH / 7;
const FLOATING_SWIPE_UP_BAR_WIDTH = HEIGHT / 40;
const CARD_VIEW_HEIGHT = HEIGHT - FOOTER_HEIGHT;
export const TOTAL_FOOTER_HEIGHT = FOOTER_HEIGHT + FLOATING_SWIPE_UP_BAR_WIDTH;

interface FooterProps {
    onCircleLongPress(
        blockType: keyof Block,
        blockID: keyof IBlockID,
        code: string
    ): void;
    deleteLastCB(): void;
    footerIcons: IFooterIcon[];
    cardData: ICard[];
}

const Footer: React.FC<FooterProps> = ({
    onCircleLongPress,
    deleteLastCB,
    cardData,
    footerIcons,
}) => {
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
                    {footerIcons.map(({ blockType, blockID, code }, key) => (
                        <FooterIcon
                            key={key}
                            blockID={blockID}
                            blockType={blockType}
                            code={code}
                            onCircleLongPress={onCircleLongPress}
                        />
                    ))}
                </ScrollView>
                <TouchableNativeFeedback onPress={deleteLastCB}>
                    <View style={styles.trashBox}>
                        <Entypo
                            name="trash"
                            size={24}
                            color="white"
                            style={styles.trash}
                        />
                    </View>
                </TouchableNativeFeedback>
            </Animated.View>
            <CardDataView
                cardData={cardData}
                translateY={translateY}
                cardViewHeight={CARD_VIEW_HEIGHT}
            />
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
