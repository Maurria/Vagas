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
        
        maxWidth: 150,
        height: 150,
        borderRadius: 100
     },

      topp:{ 
        paddingTop: 10,  
    },
    log:{
      marginTop: 50,
      width: '70%',
      borderRadius: 30, 
      justifyContent: 'center',
      alignContent: 'center',
      alignItems:'center' 
    },

    button: {
        backgroundColor: '#5835A3',
        height: 70,
        width:'90%',
        alignItems:'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 50,
        marginTop: 5,
       
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        },
        logo: {
            maxWidth: 70,
            height: 70,
            borderRadius: 38,
          },
          txt: {
            
            paddingTop:50,
            color: '#5835A3',
            fontWeight: 'bold',
            fontSize: 16, 
          }
});





    
