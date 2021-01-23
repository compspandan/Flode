import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { colors } from '../FlowChart/config';

interface CardProps {
    title: string;
    desc: string;
    cardHeight: number;
}

const { width: WINDOW_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = WINDOW_WIDTH * 0.8;

const Card: React.FC<CardProps> = ({ title, desc, cardHeight }) => {
    return (
        <View>
            <LinearGradient
                style={[
                    styles.center,
                    { height: cardHeight, width: CARD_WIDTH },
                ]}
                colors={colors.cond}
            >
                <Text style={[styles.text, styles.title]}>{title}</Text>
                <Text style={[styles.text, styles.desc]}>{desc}</Text>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
    },
    text: {
        color: '#FFF',
        textAlign: 'center',
    },
    title: {
        fontSize: 40,
    },
    desc: {
        fontSize: 20,
    },
});

export default Card;
