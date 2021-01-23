import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

interface FooterProps {
    color: string;
}

const FooterIcon: React.FC<FooterProps> = ({ color }) => {
    return (
        <View style={styles.padding}>
            <View style={[styles.foot, { backgroundColor: color }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    foot: {
        width: width / 10,
        height: width / 10,
        borderRadius: width / 20,
    },
    padding: {
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: width / 70,
    },
});

export default FooterIcon;
