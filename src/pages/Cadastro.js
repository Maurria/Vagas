import React from 'react';
import { ActivityIndicator, KeyboardAvoidingView, View, TextInput, Text, StyleSheet,TouchableOpacity  } from 'react-native';

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
        	 isLoading: false,

		}
	}

	 


	onChangeCadastrar(field, value){
        this.setState({
          [field] : value
        });
    }


     Cad (){
		return this.props.navigation.navigate('Dashboard');
     }

      Cadastrar () {
        // função que direcionar o usuário se caso passar os dados corretoss
      const loginUserSucess = user =>{
        return this.props.navigation.navigate('Dashboard');
          
      }
        //função que capta os erros de acesso! 
      const loginUserFailed = error => {
         this.setState({ 
               message: this.getMessageByErrorCode(error.code)
            });
      }

          this.setState({ isLoading: true, message: '' });
        const {mail: email, password} = this.state;

        firebase
          .auth()//metódo para autenticar do próprio firebase
          .createUserWithEmailAndPassword(email, password) // seria para criar ainda n funciona
          .then(loginUserSucess)
          .catch(loginUserFailed)


        .catch(error => {
          if (error.code === 'auth/user-not-found'){
            return Alert.alert(//caixa de alerta de quando o usuário não for encontrar
              'Usuário já existente',
              'Deseja criar uma cadastro',
              
            { cancelable: false }
          )
            }

              loginUserFailed(error);
         
        })
        .then(()=> this.setState({isLoading: false}));
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

  renderButton2(){
    if(this.state.isLoading)
          return <ActivityIndicator />
  return(
     <TouchableOpacity 
 		 onPress={()=> this.Cadastrar()}
			style = {styles.button}> 
      
       <Text style = {styles.buttonText}>Finalizar Cadastro </Text>
       
   </TouchableOpacity>
  )}



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
							    onChangeText={value => this.onChangeCadastrar('mail', value)}
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
					     onChangeText={value => this.onChangeCadastrar('password',value)}
										 />
				</Forms>
				</View>

				 { this.renderButton2() }
				 { this.renderMessage() }

				

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


					