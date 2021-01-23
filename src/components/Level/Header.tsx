import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { height } = Dimensions.get('screen');

interface HeaderProps {
    goBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ goBack }) => {
    return (
        <View style={styles.header}>
            <View style={styles.btnContainer}>
                <AntDesign
                    name="arrowleft"
                    size={36}
                    color="black"
                    style={styles.backBtn}
                    onPress={goBack}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Levels</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#16213E',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: height / 14,
    },
    btnContainer: {
        position: 'absolute',
        left: 0,
    },
    backBtn: {
        margin: 15,
        color: '#e94560',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 25,
    },
});

export default Header;
