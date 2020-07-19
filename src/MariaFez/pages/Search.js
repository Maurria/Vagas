import * as React from 'react';

import { View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.input} >
        <TextInput style={styles.inputLayot}></TextInput>
      </View>
      <SafeAreaView>
        <ScrollView>
        <ScrollView horizontal>
          <View>
            <ImageBackground source={require('../drawable/Map.png')} style={styles.searchMap} /> 
          </View>
        </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = {
    container:{
      paddingTop: 25
    },
  
    searchMap: {
      width: 744,
      height: 521,
    },
  
    inputLayot:{
      backgroundColor: '#fff',
      paddingLeft: 14,
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius: 10
    },
    input:{
      padding: 5,
      backgroundColor: '#5835A3'
    },
};