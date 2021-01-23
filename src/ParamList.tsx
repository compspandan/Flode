import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ParamList = {
    Landing: undefined;
    Levels: undefined;
    Game: { level: number };
    About: undefined;
};

export type NavProps<T extends keyof ParamList> = {
    navigation: StackNavigationProp<ParamList, T>;
    route: RouteProp<ParamList, T>;
};
