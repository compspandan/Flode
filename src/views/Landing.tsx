import { Comfortaa_700Bold, useFonts } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Svg, { Ellipse, SvgXml } from 'react-native-svg';
import { NavProps } from '../ParamList';
import imagesvg from '../components/ArcSVG';

const { width, height } = Dimensions.get('window');

const Landing: React.FC<NavProps<'Landing'>> = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Comfortaa_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={{ height }}>
            <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 50,
                        fontFamily: 'Comfortaa_700Bold',
                        marginTop: height / 10,
                    }}
                >
                    Flode
                </Text>
            </View>
            <Svg
                height={height / 3}
                width={width}
                style={{ flex: 1, backgroundColor: '#E5E5E5' }}
            >
                <SvgXml
                    xml={imagesvg}
                    width="100%"
                    height="100%"
                    x={width / 2}
                />
            </Svg>
            <Svg
                height={height / 2.6}
                width={width}
                style={{ flex: 1, backgroundColor: '#E5E5E5' }}
            >
                <Ellipse
                    cx={width / 2}
                    cy={height / 2}
                    rx="500"
                    ry="300"
                    fill="#16213e"
                />
            </Svg>
            <TouchableOpacity
                style={styles.button1}
                onPress={() => navigation.push('Levels')}
            >
                <Text style={{ color: 'white' }}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button2}
                onPress={() => navigation.push('About')}
            >
                <Text style={{ color: 'white' }}>About Us</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    button1: {
        height: 52,
        width: 170,
        position: 'absolute',
        left: width / 3.22,
        top: height / 1.25,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2: {
        height: 52,
        width: 170,
        position: 'absolute',
        left: width / 3.22,
        top: height / 1.12,
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e94560',
    },
});
export default Landing;
