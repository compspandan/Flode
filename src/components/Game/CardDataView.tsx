import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
import Card from './Card';

interface CardDataViewProps {
    translateY: Animated.Adaptable<number>;
    cardViewHeight: number;
}

// https://uigradients.com/#Lawrencium
const gradientColors = ['#0f0c29', '#302b63', '#24243e'];

const CardDataView: React.FC<CardDataViewProps> = ({
    translateY,
    cardViewHeight,
}) => {
    const cardHeight = cardViewHeight * 0.8;
    return (
        <Animated.View style={{ transform: [{ translateY }] }}>
            <LinearGradient
                style={{
                    height: cardViewHeight,
                }}
                colors={gradientColors}
            >
                <ScrollView horizontal >
                    <Card desc="dsa" title="sadi" cardHeight={cardHeight} />
                    <Card desc="dsa" title="sadi" cardHeight={cardHeight} />
                    <Card desc="dsa" title="sadi" cardHeight={cardHeight} />
                    <Card desc="dsa" title="sadi" cardHeight={cardHeight} />
                </ScrollView>
            </LinearGradient>
        </Animated.View>
    );
};

export default CardDataView;
