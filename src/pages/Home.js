import React from 'react';
import {  Image,Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

 export default function Home ({navigation}) { 
     return (
        <KeyboardAvoidingView style={styles.tras}>
        <View style = {styles.topp}>    
         <Image style = {styles.imag} 
            
            source ={require('./logo1.png')}
            />
        </View>

        <Text style = {styles.txt}>App Vagas</Text>

        <View style={styles.log}>
        <TouchableOpacity style = {styles.button}
                 
                 onPress={()=> navigation.navigate('Login')}>
                 <Text style = {styles.buttonText}>Login</Text>
 
          </TouchableOpacity>

            
        <TouchableOpacity style = {styles.button}
                 
                onPress={()=> navigation.navigate('Sobre')}>
                <Text style = {styles.buttonText}>Sobre</Text>

                </TouchableOpacity>
         </View>

        
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    tras:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center'
    },

     imag:{
        
        maxWidth: 120,
        height: 120,
        borderRadius: 100
     },

      topp:{ 
        paddingTop: 40,  
    },
    log:{
      paddingTop:20,
      width: '70%',
      borderRadius: 30, 
      justifyContent: 'center',
      alignContent: 'center',
      alignItems:'center',


    },

    button: {

        backgroundColor: '#5835A3',
        height: 60,
        width:'120%',
        alignItems:'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 50,
        marginTop: 30
       
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        },
        logo: {
            maxWidth: 50,
            height: 50,
            borderRadius: 38,
          },
          txt: {
            
            paddingTop:50,
            color: '#5835A3',
            fontWeight: 'bold',
            fontSize: 20, 
          }
});





    
