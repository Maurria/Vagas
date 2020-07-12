import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class Dashboard extends React.Component {
	render(){
		return (
			<View style = {styles.container} >
			<Text style = { styles.txt }> Conseguimos !</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: 1,
		padding: 10
	},

	txt: {
		fontSize: 15,
		
	},
});