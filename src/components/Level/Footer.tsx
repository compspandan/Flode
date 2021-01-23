import React from 'react';
import { NavProps } from '../../ParamList';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import FooterIcon from './FooterIcon'

const { height, width } = Dimensions.get('screen');

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
	return (
		<View style={styles.foot}>
			<ScrollView horizontal={true}>
				<FooterIcon color="white" />
				<FooterIcon color="red" />
				<FooterIcon color="green" />
				<FooterIcon color="yellow" />
				<FooterIcon color="white" />
				<FooterIcon color="white" />
				<FooterIcon color="white" />
				<FooterIcon color="white" />
				<FooterIcon color="white" />
			</ScrollView>
			<View style={styles.trashBox}>
				<Entypo name="trash" size={24} color="white" style={styles.trash} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	foot: {
		width: width,
		height: height / 12,
		backgroundColor: "#16213E",
		display: 'flex',
		flexDirection: "row"
	},
	trash: {
		textAlign:"center"
	},
	trashBox: {
		width: width / 6,
		backgroundColor: "#e94560",
		marginLeft: "auto",
		display:"flex",
		justifyContent:"center"
	}
});

export default Footer;