import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const { height, width } = Dimensions.get('screen');

interface FooterProps { color: string }

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
        display: "flex",
        justifyContent: "center",
        paddingLeft: width / 70,
        paddingRight: width / 70,
    }
});

export default FooterIcon;