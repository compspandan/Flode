import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Svg, { Ellipse, SvgXml } from 'react-native-svg';
import imagesvg from '../components/SVGs/ArcSVG';
import { NavProps } from '../ParamList';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const Landing: React.FC<NavProps<'Landing'>> = ({ navigation }) => (
    <View style={styles.mainContainer}>
        <View style={styles.svg}>
            <Text style={styles.header}>Flode</Text>
        </View>
        <Svg height={HEIGHT / 3} width={WIDTH} style={styles.svg}>
            <SvgXml xml={imagesvg} width="100%" height="100%" x={WIDTH / 2} />
        </Svg>
        <Svg height={HEIGHT / 2.6} width={WIDTH} style={styles.svg}>
            <Ellipse
                cx={WIDTH / 2}
                cy={HEIGHT / 2}
                rx="500"
                ry="300"
                fill="#16213e"
            />
        </Svg>
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.playButton}
            onPress={() => navigation.push('Levels')}
        >
            <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.aboutButton}
            onPress={() => navigation.push('About')}
        >
            <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        height: HEIGHT,
    },
    svg: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    header: {
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'Comfortaa_700Bold',
        marginTop: HEIGHT / 10,
    },
    playButton: {
        height: 52,
        width: 170,
        position: 'absolute',
        left: WIDTH / 3.22,
        top: HEIGHT / 1.25,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    aboutButton: {
        height: 52,
        width: 170,
        position: 'absolute',
        left: WIDTH / 3.22,
        top: HEIGHT / 1.12,
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e94560',
    },
    buttonText: {
        color: '#fff',
    },
});
export default Landing;
