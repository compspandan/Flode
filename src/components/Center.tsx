import React from 'react';
import { View } from 'react-native';

const Center = (props: { children: any }) => (
    <View style={{ flex: 1, justifyContent: 'center' }}>{props.children}</View>
);

export default Center;
