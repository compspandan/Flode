import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { ParamList } from './ParamList';
import About from './views/About';
import Landing from './views/Landing';
import Levels from './views/Levels';
import { Comfortaa_700Bold, useFonts } from '@expo-google-fonts/comfortaa';
import {Ubuntu_500Medium} from "@expo-google-fonts/ubuntu";
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator<ParamList>();

const App = () => {
    let [fontsLoaded] = useFonts({
        Comfortaa_700Bold,
        Ubuntu_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ header: () => null }}
                initialRouteName="Landing"
            >
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Levels" component={Levels} />
                <Stack.Screen name="Landing" component={Landing} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
