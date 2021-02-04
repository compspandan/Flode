import React, { useState } from 'react';
import {
    TouchableOpacity,
    Text,
    Modal,
    View,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { BlurView } from 'expo-blur';
import Animated from 'react-native-reanimated';
import { AntDesign, Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList } from '../../ParamList';
import { positionInterface } from '../FlowChart/config';

const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

interface headerModalProps {
    level: number;
    navigation: StackNavigationProp<ParamList, 'Game'>;
    position: Animated.SharedValue<positionInterface>;
    validation: string[];
}

const decodeObj = (obj) => {
    const decodedObj = Object.keys(obj).map((key) => {
        const decodedKey = key.substr(0, key.indexOf('?'));
        return { [decodedKey]: obj[key] };
    });
    return Object.assign({}, ...decodedObj);
};

const HeaderModal: React.FC<headerModalProps> = ({
    level,
    navigation,
    position,
    validation,
}) => {
    const [flag, Setflag] = useState(false);
    const [opac, Setopac] = useState(1);
    const [modalVisible, SetmodalVisible] = useState(false);
    const [modalVisible2, SetmodalVisible2] = useState(false);
    const [butname, Setbutname] = useState(1);
    const [hint, setHint] = useState(-1);

    const validate = () => {
        Setflag(true);
        Setbutname(0);
        setHint(-1);
        const decodedObj = decodeObj(position.value);
        for (var i = 0; i < validation.length; i++) {
            if (i != decodedObj[validation[i]]) {
                Setflag(false);
                Setbutname(1);
                setHint(i);
                break;
            }
        }
    };


    return (
        <>
            <TouchableOpacity style={styles.button1} onPress={()=>{validate();SetmodalVisible(true);}}>
                <Text style={{ color: 'white' }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={()=>{validate();SetmodalVisible2(true)}}>
                <Text style={{ color: 'white' }}>Help</Text>
            </TouchableOpacity>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
            >
                <BlurView intensity={100 * opac}>
                    <View
                        style={[
                            styles.popup,
                            {
                                opacity: opac,
                                borderRadius: 20,
                                display: 'flex',
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
                                    Setopac(0), navigation.pop();
                                }}
                                style={[
                                    styles.popupbuttons,
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
                                    butname
                                        ? SetmodalVisible(false)
                                        : navigation.replace('Game', {
                                              level: level + 1,
                                          });
                                    SetmodalVisible(false);
                                }}
                                style={[
                                    styles.popupbuttons,
                                    {
                                        margin: 20,
                                        marginRight: WINDOW_WIDTH / 8,
                                    },
                                ]}
                            >
                                <AntDesign
                                    name={butname ? 'reload1' : 'caretright'}
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
                visible={modalVisible2}
            >
                <BlurView intensity={100 * opac}>
                    <View
                        style={[
                            styles.popup,
                            {
                                opacity: opac,
                                borderRadius: 20,
                                display: 'flex',
                            },
                        ]}
                    >
                        <Text style={{color:'white',textAlign:'center',fontSize:30,marginTop:WINDOW_HEIGHT/11,fontFamily:'Ubuntu_500Medium',fontWeight: 'bold'}}>Hint</Text>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                marginTop:10,
                                fontSize: 20,
                                fontFamily: 'Ubuntu_500Medium',
                            }}
                        >
                            {hint===-1?'No hints required.':'Check Block '+(hint+1)}
                        </Text>
                        <View style={{display:'flex',justifyContent:'center',flexDirection:'row',marginTop:55}}>
                        <TouchableOpacity
                                onPress={() => {
                                    SetmodalVisible2(false);
                                }}
                                style={[
                                    styles.popupbuttons
                                ]}
                            >
                                <AntDesign
                                    name='reload1'
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
    button1: {
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
    },
    popupbuttons: {
        width: 80,
        height: 80,
        alignItems: 'center',
        borderRadius: 18,
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: '#e94560',
        borderColor: '#e94560',
    },
    button2: {
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
});

export default HeaderModal;
