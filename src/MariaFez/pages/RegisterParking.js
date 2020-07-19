import React from 'react';

import { Text, View, StyleSheet, SafeAreaView, Button } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function RegisterParking( { navigation } ){
  return (
    <View style={ styles.container } >
      <View style={ styles.view }>
        <View style={styles.lineTextRegister}>
          <TouchableOpacity style={ styles.lineRegister } onPress={() => navigation.navigate('Private')}> 
            <MaterialCommunityIcons  name="boom-gate-outline" color={'#2439A5'} size={60} />
            <Text style={ styles.lineTextRegister }> Estacionamentos Privados </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lineTextRegister}>
          <TouchableOpacity style={ styles.lineRegister } onPress={() => navigation.navigate('Residencial')}> 
            <MaterialCommunityIcons  name="home-outline" color={'#EACE3A'} size={60} />
            <Text style={styles.lineTextRegister}> Estacionamentos Rezidênciais </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export function Private(  ){
  return(
    <SafeAreaView>
    <ScrollView>

    <View style={ styles.container }>
      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="rename-box" color={'#000'} size={22} />
          <TextInput value='Nome' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="map-marker-question-outline" color={'#000'} size={22} />
          <TextInput value='Cep' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="map-marker-question-outline" color={'#000'} size={22} />
          <TextInput value='Estado' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="map-marker-question-outline" color={'#000'} size={22} />
          <TextInput value='Cidade' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="map-marker-question-outline" color={'#000'} size={22} />
          <TextInput value='Bairro' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="map-marker-question-outline" color={'#000'} size={22} />
          <TextInput value='Rua/Av./Logradouro' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="format-list-numbered" color={'#000'} size={22} />
          <TextInput value='N° de Vagas' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.button }>  
        <TouchableOpacity>
          <Button title='Cadastrar' />
        </TouchableOpacity>
      </View>
    </View>

    </ScrollView>
    </SafeAreaView>
  );
}

export function Residencial(  ){
  return(
    <SafeAreaView>
    <ScrollView>

    <View style={ styles.container }>
      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="rename-box" color={'#000'} size={22} />
          <TextInput value='Cep' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="map-marker-question-outline" color={'#000'} size={22} />
          <TextInput value='Estado' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="map-marker-question-outline" color={'#000'} size={22} />
          <TextInput value='Cidade' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="map-marker-question-outline" color={'#000'} size={22} />
          <TextInput value='Bairro' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="map-marker-question-outline" color={'#000'} size={22} />
          <TextInput value='Rua/Av./Logradouro' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.test }>  
        <View style={ styles.inputLayot }>
          <MaterialCommunityIcons style={ styles.inputImage } name="format-list-numbered" color={'#000'} size={22} />
          <TextInput value='N° de Vagas' style = {styles.inputText} />
        </View>
      </View>

      <View style={ styles.button }>  
        <TouchableOpacity>
          <Button title='Cadastrar' />
        </TouchableOpacity>
      </View>
    </View>

    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
    container:{
      padding: 15,
    },
  
    headerName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff'
    },
  
    view: {
      paddingTop: 15,
      fontSize: 14,
    },
  
    header: { 
      height: 60,
      backgroundColor: '#5835A3',
      borderBottomColor: "#bbb",
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    lineRegister: {
      height: 80,
      borderWidth: 1,
      borderRadius: 10,
      alignItems: 'center',
      padding: 10,
      flexDirection: 'row',
    },
    lineTextRegister: {
      padding: 5
    },

    test: {
      padding: 5
    },
    button:{
      padding: 20
    },

    inputLayot:{
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,  
      backgroundColor: '#fff',
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius: 10,
      padding: 10 
    },
    inputImage: {
      flex: 1,
      paddingLeft: 15
    },
    inputText:{
      flex: 5,
      color: '#000',
      height: 40, 
      borderBottomColor: 'gray',
    }
});