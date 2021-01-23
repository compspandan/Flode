import React from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableNativeFeedback,
    View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Block, colors } from '../FlowChart/config';

const { width: WIDTH } = Dimensions.get('screen');
const ICON_SIZE = WIDTH / 10;
const PADDING = WIDTH / 70;

interface FooterProps {
    blockType: keyof Block;
    onCircleLongPress(x: keyof Block): void;
}

const FooterIcon: React.FC<FooterProps> = ({
    blockType,
    onCircleLongPress,
}) => {
    const longPress = () => {
        onCircleLongPress(blockType);
    };
    return (
        <TouchableNativeFeedback onLongPress={longPress}>
            <View style={styles.padding}>
                <LinearGradient
                    colors={colors[blockType]}
                    style={styles.foot}
                />
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    foot: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: ICON_SIZE / 2,
    },
    padding: {
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: PADDING,
    },
});

export default FooterIcon;
