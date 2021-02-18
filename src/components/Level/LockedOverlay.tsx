import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
} from 'react-native';
import Svg, { SvgXml } from 'react-native-svg';
import { ProgressSVG } from '../SVGs/ProgressSVG';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('screen');

interface LockedOverlayProps {
    visible: boolean;
    toggleOverlay: () => void;
}

const LockedOverlay: React.FC<LockedOverlayProps> = ({
    visible,
    toggleOverlay,
}) => (
    <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={toggleOverlay}
    >
        <View style={styles.container}>
            <View>
                <Text style={[styles.title, styles.centerText]}>
                    This level is locked!
                </Text>
                <Svg height={HEIGHT / 3} width="100%">
                    <SvgXml xml={ProgressSVG} width="100%" height="100%" />
                </Svg>
                <Text style={[styles.desc, styles.centerText]}>
                    To unlock this level, please complete all the previous
                    levels.
                </Text>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={toggleOverlay}
                >
                    <Text style={[styles.centerText, styles.buttonText]}>
                        Go back
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '10%',
        flex: 1,
        justifyContent: 'center',
    },
    centerText: {
        textAlign: 'center',
    },
    svg: {
        marginVertical: 10,
    },
    title: {
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 35,
    },
    desc: {
        marginVertical: 10,
        fontSize: 20,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        height: 40,
        borderRadius: 7.5,
        marginVertical: 10,
        backgroundColor: '#e94560',
    },
    buttonText: {
        fontSize: 17.5,
        color: '#fff',
    },
});

export default LockedOverlay;
