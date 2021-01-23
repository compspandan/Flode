import React from 'react';
import { Text } from 'react-native';

export const CenterText = (props: { children: any }) => (
    <Text style={{ textAlign: 'center' }}>{props.children}</Text>
);
