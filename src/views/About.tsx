import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Center from '../components/Center';
import { CenterText } from '../components/Text';
import { NavProps } from '../ParamList';

const About: React.FC<NavProps<'About'>> = ({ navigation }) => {
    return (
        <Center>
            <View>
                <CenterText>About Us</CenterText>
                <CenterText>Internet Money</CenterText>
                <Button
                    title="Go to Landing"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </Center>
    );
};

export default About;