import React from 'react';
import { StyleSheet, View } from 'react-native';

const Forms = props => {
	const { children, first, last } = props;
	return (
		<View style={[
			styles.container,
			first ? styles.first : null,
			last ? styles.last : null
		]}>
			{children}
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: 'white',
		marginTop: 10,
		marginBottom: 5,
		elevation: 1,
		marginLeft: 10,
		marginRight:10,
		borderRadius:10
	},
	first: {
		marginTop: 10,
	},
	last: {
		marginBottom: 30,
	}
});

export default Forms;