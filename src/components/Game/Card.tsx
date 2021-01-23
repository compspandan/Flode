import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Block, colors } from '../FlowChart/config';

interface CardProps {
    title: string;
    desc: string;
    blockType: keyof Block;
}

const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = WINDOW_WIDTH * 0.9;

const Card: React.FC<CardProps> = ({ title, desc, blockType }) => {
    return (
        <View style={{ height: WINDOW_HEIGHT * 0.85 }}>
            <LinearGradient
                style={[styles.center, { width: CARD_WIDTH }]}
                colors={colors[blockType]}
            >
                <View style={styles.textBox}>
                    <Text style={[styles.text, styles.title]}>{title}</Text>
                    <Text style={[styles.text, styles.desc]}>{desc}</Text>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        borderRadius: 5,
    },
    textBox: {
        margin: 15,
    },
    text: {
        color: '#FFF',
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
    },
    desc: {
        fontSize: 20,
    },
});

export default Card;
