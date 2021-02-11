import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Animated from 'react-native-reanimated';
import { ICard } from '../../gameData';
import SwipeView from './SwipeView';

interface CardDataViewProps {
    translateY: Animated.Adaptable<number>;
    cardViewHeight: number;
    cardData: ICard[];
}

// https://uigradients.com/#Lawrencium
const gradientColors = ['#0f0c29', '#302b63', '#24243e'];

const CardDataView: React.FC<CardDataViewProps> = ({
    translateY,
    cardViewHeight,
    cardData,
}) => {
    return (
        <Animated.View style={{ transform: [{ translateY }] }}>
            <LinearGradient
                style={{
                    height: cardViewHeight,
                }}
                colors={gradientColors}
            >
                <SwipeView cardData={cardData} />
            </LinearGradient>
        </Animated.View>
    );
};

export default CardDataView;
