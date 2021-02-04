import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavProps } from '../ParamList';

const About: React.FC<NavProps<'About'>> = ({ navigation }) => (
    <View style={styles.center}>
        <View>
            <Text style={styles.text}>About Us</Text>
            <Text style={styles.text}>Made By Team Flode</Text>
            <Button title="Go to Landing" onPress={() => navigation.goBack()} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
});

export default About;
