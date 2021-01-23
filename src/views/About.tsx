import React from 'react';
import { View } from 'react-native';
import Center from '../components/Center';
import { CenterText } from '../components/Text';
import { NavProps } from '../ParamList';
import { Button } from 'react-native-elements';

const About: React.FC<NavProps<'About'>> = ({ navigation }) => {
    return (
            <Center>
                <View>
                    <CenterText>About Us</CenterText>
                    <CenterText>Made By Team Flode</CenterText>
                    <Button
                        title="Go to Landing"
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </Center>
    );
};


export default About;
