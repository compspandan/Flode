import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Overlay } from 'react-native-elements';

const { height } = Dimensions.get('screen');

interface LockedOverlayProps {
    visible: boolean;
    toggleOverlay: () => void;
}

const LockedOverlay: React.FC<LockedOverlayProps> = ({
    visible,
    toggleOverlay,
}) => (
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.container}>
            <Text style={styles.title}>This level is locked!</Text>
            <Text>
                To unlock this level, please complete all the previous levels.
            </Text>
            <Button color="#e94560" onPress={toggleOverlay} title="Go Back" />
        </View>
    </Overlay>
);

const styles = StyleSheet.create({
    container: {
        height: height / 7,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default LockedOverlay;
