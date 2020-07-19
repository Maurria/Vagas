import React from 'react';

import { Text, View, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Profile(){
    return (
        <SafeAreaView>
        <ScrollView>
        
        <View>
            <View style={ styles.headerProfile }>
                <Image style={styles.profileImage}
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
                <Text style={styles.headerName}> Herculano </Text>
  
                <View style={ styles.profileStats }>
                <Text style={styles.profileStatsName}> 4.5 Estrelas </Text>
                <Text style={styles.profileStatsName}> Ocupado </Text>
                </View>
            </View>
            
            <View style={ styles.view }>
                <TouchableOpacity style={ styles.line }> 
                <MaterialCommunityIcons  name="account-search-outline" color={'#000'} size={22} />
                <Text style={styles.lineText}> Dados Pessoais </Text>
                </TouchableOpacity>
  
                <TouchableOpacity style={ styles.line }> 
                <MaterialCommunityIcons  name="card-bulleted" color={'#000'} size={22} />
                <Text style={ styles.lineText }> Formas de Pagamento </Text>
                </TouchableOpacity>
  
  
                <TouchableOpacity style={ styles.line }> 
                <MaterialCommunityIcons  name="shield-car" color={'#000'} size={22} />
                <Text style={ styles.lineText }> Seguro </Text>
                </TouchableOpacity>
  
                <TouchableOpacity style={ styles.line }> 
                <MaterialCommunityIcons  name="help" color={'#000'} size={22} />
                <Text style={ styles.lineText }> Ajuda </Text>
                </TouchableOpacity>
  
                <TouchableOpacity style={ styles.line }>  
                <MaterialCommunityIcons  name="bug" color={'#000'} size={22} />
                <Text style={ styles.lineText }> Relatar Problema </Text>
                </TouchableOpacity>
  
                <TouchableOpacity style={ styles.line }> 
                <MaterialCommunityIcons  name="cogs" color={'#000'} size={22} />
                <Text style={ styles.lineText }> Configurações do APP </Text>
                </TouchableOpacity>
  
                <TouchableOpacity style={ styles.line }> 
                <MaterialCommunityIcons  name="exit-run" color={'#B22222'} size={22} />
                <Text style={ styles.lineText }> Desconectar </Text> 
                </TouchableOpacity>
            </View>
        </View>
  
        </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create ({
    container:{
      paddingTop: 25
    },
  
    headerProfile: { 
      paddingTop: 36,
      height: 180,
      backgroundColor: '#5835A3',
      borderBottomColor: "#bbb",
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    profileImage: {
        width: 70,
        height: 70,
        
        borderRadius: 50
    },
  
    profileStatsName: {
        color: '#fff'
    },
  
    headerName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff'
    },
  
    profileStats: {
        flexDirection: 'row',
        flex: 1
    },
  
    view: {
      paddingTop: 15,
      fontSize: 14,
    },
  
    line:{
      paddingLeft: 24,
      height: 60,
      flexDirection: 'row',
    },
    lineText: {
      fontSize: 18,
      paddingLeft: 14,
      justifyContent: 'center',  
    }
});  