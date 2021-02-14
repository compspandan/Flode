import { AntDesign, Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import {
    Dimensions,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { ParamList } from '../../ParamList';
import { IPosition } from '../FlowChart/config';

const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

interface headerModalProps {
    level: number;
    navigation: StackNavigationProp<ParamList, 'Game'>;
    position: Animated.SharedValue<IPosition>;
    validation: string[];
}

interface IDecodedObj {
    [key: string]: number[];
}

const decodeObj = (obj) => {
    let decodedObj: IDecodedObj = {};
    for (var key in obj) {
        const decodedKey = key.substr(0, key.indexOf('?'));
        const val = obj[key];
        const newVal = decodedObj[decodedKey]
            ? [...decodedObj[decodedKey], val]
            : [val];
        decodedObj = { ...decodedObj, [decodedKey]: newVal };
    }
    return decodedObj;
};

const HeaderModal: React.FC<headerModalProps> = ({
    level,
    navigation,
    position,
    validation,
}) => {
    const [flag, setFlag] = useState<boolean>(false);
    const [opac, setOpac] = useState<number>(1);
    const [submitModalVisible, setSubmitModal] = useState<boolean>(false);
    const [hintModalVisible, setHintModal] = useState<boolean>(false);
    const [buttonName, setButtonName] = useState<boolean>(true);
    const [hint, setHint] = useState<number>(-1);

    const validate = () => {
        setFlag(true);
        setButtonName(false);
        setHint(-1);
        const decodedObj = decodeObj(position.value);
        for (var i = 0; i < validation.length; i++) {
            if (
                decodedObj[validation[i]] === undefined ||
                decodedObj[validation[i]].find((value) => value == i) ===
                    undefined
            ) {
                setFlag(false);
                setButtonName(true);
                setHint(i);
                break;
            }
        }
    };

    return (
        <>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {
                    validate();
                    setSubmitModal(true);
                }}
            >
                <Text style={{ color: 'white' }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.hintButton}
                onPress={() => {
                    validate();
                    setHintModal(true);
                }}
            >
                <Text style={{ color: 'white' }}>Help</Text>
            </TouchableOpacity>
            <Modal
                animationType="none"
                transparent={true}
                visible={submitModalVisible}
            >
                <BlurView intensity={100 * opac}>
                    <View
                        style={[
                            styles.popup,
                            {
                                opacity: opac,
                            },
                        ]}
                    >
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 40,
                                marginTop: WINDOW_HEIGHT / 11,
                                fontFamily: 'Ubuntu_500Medium',
                                fontWeight: 'bold',
                            }}
                        >
                            {flag ? 'Level Cleared!!' : 'Wrong Answer'}
                        </Text>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: WINDOW_HEIGHT / 9,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setOpac(0), navigation.pop();
                                }}
                                style={[
                                    styles.popupButton,
                                    {
                                        margin: 20,
                                        marginLeft: WINDOW_WIDTH / 8,
                                        marginRight: WINDOW_WIDTH / 8,
                                    },
                                ]}
                            >
                                <Feather
                                    name="list"
                                    size={60}
                                    color="white"
                                    style={{ textAlign: 'center', margin: 5 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    buttonName
                                        ? setSubmitModal(false)
                                        : navigation.replace('Game', {
                                              level: level + 1,
                                          });
                                    setSubmitModal(false);
                                }}
                                style={[
                                    styles.popupButton,
                                    {
                                        margin: 20,
                                        marginRight: WINDOW_WIDTH / 8,
                                    },
                                ]}
                            >
                                <AntDesign
                                    name={buttonName ? 'reload1' : 'caretright'}
                                    size={62}
                                    color="white"
                                    style={{ textAlign: 'center', margin: 6 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </Modal>
            <Modal
                animationType="none"
                transparent={true}
                visible={hintModalVisible}
            >
                <BlurView intensity={100 * opac}>
                    <View
                        style={[
                            styles.popup,
                            {
                                opacity: opac,
                            },
                        ]}
                    >
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 30,
                                marginTop: WINDOW_HEIGHT / 11,
                                fontFamily: 'Ubuntu_500Medium',
                                fontWeight: 'bold',
                            }}
                        >
                            Hint
                        </Text>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                marginTop: 10,
                                fontSize: 20,
                                fontFamily: 'Ubuntu_500Medium',
                            }}
                        >
                            {hint === -1
                                ? 'No hints required.'
                                : 'Check Block ' + (hint + 1)}
                        </Text>
                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                marginTop: 55,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => setHintModal(false)}
                                style={styles.popupButton}
                            >
                                <AntDesign
                                    name="reload1"
                                    size={62}
                                    color="white"
                                    style={{ textAlign: 'center', margin: 6 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    submitButton: {
        height: 50,
        width: 75,
        position: 'absolute',
        left: WINDOW_WIDTH / 1.25,
        top: WINDOW_HEIGHT / 14,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#e94560',
        backgroundColor: '#e94560',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popupButton: {
        width: 80,
        height: 80,
        alignItems: 'center',
        borderRadius: 18,
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: '#e94560',
        borderColor: '#e94560',
    },
    hintButton: {
        height: 50,
        width: 75,
        position: 'absolute',
        left: WINDOW_WIDTH / 38,
        top: WINDOW_HEIGHT / 1.15,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#e94560',
        backgroundColor: '#e94560',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    popup: {
        backgroundColor: '#16213E',
        width: WINDOW_WIDTH / 1.32,
        height: WINDOW_HEIGHT / 2,
        marginTop: WINDOW_HEIGHT / 4.2,
        marginBottom: WINDOW_HEIGHT / 3.8,
        marginLeft: WINDOW_WIDTH / 8,
        borderRadius: 20,
        display: 'flex',
    },
});

export default HeaderModal;
