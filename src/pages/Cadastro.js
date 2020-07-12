import React from 'react';
import { KeyboardAvoidingView, View, TextInput, Text, StyleSheet,TouchableOpacity  } from 'react-native';

import Forms from '../components/Forms';

 import firebase from '@firebase/app';
 import '@firebase/auth';

export default class Cadastro extends React.Component{
	
	constructor(props){
		super(props);
		this.state= {
			mail: '',
        	password: '',
        	message:'',

		}
	}

	 getMessageByErrorCode(errorCode) {
        switch (errorCode) {
          case 'auth/wrong-password':
            return 'Senha incorreta';
          case 'auth/user-not-found':
            return 'Usuário não encontrado';
          default:
            return 'Erro desconhecido';
        }
      }


	onChangeLogar(field, value){
        this.setState({
          [field] : value
        });
    }

    Cadastro () {
        return this.props.navigation.navigate('Cadastro');
      }

     Cad (){
		return this.props.navigation.navigate('Dashboard');
     }

     renderMessage(){
    const { message } = this.state;
    if(!message)
      return null;

    return (
      <View>
        <Text>{ message }</Text>
      </View>
    );
  }



	render(){
		return(
			<KeyboardAvoidingView style={styles.back}>
				<View>

				<Text style={styles.label}>E-mail *</Text>

				<Forms first>
					
						<TextInput 
						   style = {styles.input}
						    type = "email"
						    placeholder="Digite seu e-mail"
						    placeholderTextColor="#C1BCBC"
						    value= {this.state.mail}  
						    onChangeText={value => this.onChangeLogar('mail', value)}
						/>
				</Forms>

				<Text style={styles.label}>Senha *</Text>

				<Forms last>
					<TextInput 
					    style = {styles.input}
					    secureTextEntry
					    placeholder="Digete sua senha"
					    placeholderTextColor="#C1BCBC"     
					    autoCapitalize="none"
					    value={this.state.password}
					     onChangeText={value => this.onChangeLogar('password',value)}
					 />
				</Forms>
				</View>

				<View>
					<TouchableOpacity 
					   onPress={()=> this.Cad()}
					   style = {styles.button}> 
      
					    <Text style = {styles.buttonText}>Finalizar Cadastro </Text>
					       
					  </TouchableOpacity>	
				</View>

				

			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
	},
	back:{
		flex:1,
		backgroundColor:'black',
		alignContent: 'center',

	},
	button: {
		backgroundColor: '#5835A3',
		height: 42,
		width:'70%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginTop: 5,
		marginLeft: 50,
		marginRight: 50,
	},
	buttonText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16,
	},
	label: {
		paddingTop: 20,
		marginLeft:10,
		fontWeight: 'bold',
		color: 'white',
		marginBottom: 2,		
	},

});


					/*firebase
                  .auth()//metódo para autenticar do próprio firebase
                  .createUserWithEmailAndPassword(mail, password) // seria para criar ainda n funciona
                  .then(loginUserSucess)
                  .catch(loginUserFailed)*/
					//onPress={()=> this.Cad()}