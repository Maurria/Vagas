import React, {Component} from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';



 export default class Sobre extends Component {
    render(){
     return (
        <KeyboardAvoidingView style = {style.tudo}>
        <View style = {style.centro}>
        <Text style = {style.tex}>
            Olá, eu sou o Vagas e venho aqui te falar um pouco sobre mim.
            Venho para te ajudar a encontrar as melhores vagas que há perto de você.
        </Text>   
        </View>
        </KeyboardAvoidingView>
    );
}
}
const style  = StyleSheet.create({
    tudo:{
        flex:1,
        backgroundColor: '#5835A3',
        alignItems:'center'
        
    },
    centro: {
        flex:1, 
        borderRadius:40,
        marginTop:50,
        marginBottom:50,
        paddingBottom: 10,
        width: '95%',
        backgroundColor:'white'
    },
    tex: {
        textAlign:'center',
        fontSize:30,
        fontWeight: 'bold'
        
    }
});