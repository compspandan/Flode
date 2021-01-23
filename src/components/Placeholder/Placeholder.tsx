import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { View } from 'react-native';
const { height, width } = Dimensions.get('window');
interface PlaceholderProps {
    last?: boolean; //optional prop
    decision?: boolean;
    id: number;
}

const Placeholder: React.FC<PlaceholderProps> = ({ decision, last }) => {
    return (
        <View>
            <View style={styles.box}>
                <Text style={{ textAlign: 'center' }}>Place block here!</Text>
            </View>
            {!last && (
                <View style={styles.arrow}>
                    {!decision ? (
                        <FontAwesome
                            name={`long-arrow-down`}
                            size={64}
                            color="black"
                        />
                    ) : (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <Feather
                                name="arrow-down-left"
                                size={64}
                                color="black"
                            />
                            <Feather
                                name="arrow-down-right"
                                size={64}
                                color="black"
                            />
                        </View>
                    )}
                </View>
            )}
        </View>
    );
};

export const BOX_HEIGHT = height / 10;
export const ARROW_HEIGHT = 65;

const styles = StyleSheet.create({
    box: {
        marginTop: 0,
        marginHorizontal: width / 10,
        backgroundColor: '#cacfcc',
        borderRadius: 5,
        height: BOX_HEIGHT,
        borderStyle: 'dashed',
        borderWidth: 2,
        justifyContent: 'center',
    },
    arrow: {
        height: 65,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export { Placeholder };
