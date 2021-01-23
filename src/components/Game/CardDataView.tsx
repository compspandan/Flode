import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Animated from 'react-native-reanimated';
import { Block } from '../FlowChart/config';
import SwipeView from './SwipeView';

interface CardDataViewProps {
    translateY: Animated.Adaptable<number>;
    cardViewHeight: number;
}

// https://uigradients.com/#Lawrencium
const gradientColors = ['#0f0c29', '#302b63', '#24243e'];

export interface ICard {
    title: string;
    desc: string;
    blockType: keyof Block;
}

const CARDS: ICard[] = [
    {
        title: 'x <- input',
        desc:
            'Takes input from user. Stores input in variable x. \nIt can be a number, string, array, etc.',
        blockType: 'io',
    },
    {
        title: 'x <- x + i',
        desc: 'Adds x with i and stores value in x. ',
        blockType: 'exec',
    },
    {
        title: 'sadi',
        desc: 'dsa',
        blockType: 'end',
    },
    {
        title: 'loop on condition is true',
        desc:
            'Starts a loop.\nIf condition is true run following commands, else exit loop.',
        blockType: 'loop',
    },
];

const CardDataView: React.FC<CardDataViewProps> = ({
    translateY,
    cardViewHeight,
}) => {
    return (
        <Animated.View style={{ transform: [{ translateY }] }}>
            <LinearGradient
                style={{
                    height: cardViewHeight,
                }}
                colors={gradientColors}
            >
                <SwipeView cards={CARDS} />
            </LinearGradient>
        </Animated.View>
    );
};

export default CardDataView;
