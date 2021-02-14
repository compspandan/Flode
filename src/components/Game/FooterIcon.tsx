import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableNativeFeedback,
    View,
    Text,
} from 'react-native';
import { IBlockID, BlockID2Icon } from '../../gameData';
import { Block, colors } from '../FlowChart/config';

const { width: WIDTH } = Dimensions.get('screen');
const ICON_SIZE = WIDTH / 10;
const PADDING = WIDTH / 70;

interface FooterProps {
    blockType: keyof Block;
    blockID: keyof IBlockID;
    onCircleLongPress(
        blockType: keyof Block,
        blockID: keyof IBlockID,
        code: string
    ): void;
    code: string;
}

const FooterIcon: React.FC<FooterProps> = ({
    blockType,
    onCircleLongPress,
    blockID,
    code,
}) => {
    const longPress = () => onCircleLongPress(blockType, blockID, code);
    const { icon: Icon, name } = BlockID2Icon[blockID];
    return (
        <TouchableNativeFeedback onLongPress={longPress}>
            <View style={styles.padding}>
                <LinearGradient
                    colors={colors[blockType]}
                    style={styles.gradient}
                >
                    <Text style={styles.iconText}>
                        <Icon
                            // @ts-ignore
                            name={name}
                            size={24}
                        />
                    </Text>
                </LinearGradient>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    iconText: {
        color: '#fff',
        textAlign: 'center',
    },
    gradient: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: ICON_SIZE / 2,
        display: 'flex',
        justifyContent: 'center',
    },
    padding: {
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: PADDING,
    },
});

export default FooterIcon;
