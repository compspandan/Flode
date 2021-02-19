import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { NavProps } from '../ParamList';
import Svg, { SvgXml } from 'react-native-svg';
import { AboutUsSVG } from '../components/SVGs/AboutUsSVG';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('screen');

const About: React.FC<NavProps<'About'>> = ({ navigation: { goBack } }) => (
    <SafeAreaView style={styles.center}>
        <View>
            <Text style={[styles.title, styles.centerText]}>About Us</Text>
            <Svg height={HEIGHT / 3} width={WIDTH} style={styles.svg}>
                <SvgXml xml={AboutUsSVG} width="100%" height="100%" />
            </Svg>
            <Text style={[styles.desc, styles.centerText]}>
                Flode is a offline-first, mobile application that teaches
                programming through flowcharts. It incorporates beautiful
                animations and drag-and-drop physics by allowing the user to
                structure logical statements, solve programming and logical
                challenges.
            </Text>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.button}
                onPress={goBack}
            >
                <Text style={[styles.centerText, styles.buttonText]}>
                    Go back
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 19,
        padding: 10,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        height: 40,
        borderRadius: 7.5,
        marginVertical: 20,
        marginHorizontal: '10%',
        backgroundColor: '#e94560',
    },
    buttonText: {
        fontSize: 17.5,
        color: '#fff',
    },
    centerText: {
        textAlign: 'center',
    },
    svg: {
        display: 'flex',
        justifyContent: 'center',
        marginVertical: 10,
    },
});

export default About;
