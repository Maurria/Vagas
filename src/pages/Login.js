
import React, {useState, useEffect} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Animated,
  LinkingIOS,
  ActivityIndicator,
  Alert
   } from 'react-native';
   
   import firebase from '@firebase/app';
   import '@firebase/auth';

   //import firebase from './fireConnection'/;

//aula 111


export default class Login extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        mail: '',
        password: '',
        isLoading: false,
        message: '',
      } 
    }

    //fazendo a conexão com o firebase

    componentDidMount(){
       const firebaseConfig = {
          apiKey: "AIzaSyB5x6Z3crf1ClOXT1YWK7q-571cGN6MafA",
          authDomain: "vagas-7555f.firebaseapp.com",
          databaseURL: "https://vagas-7555f.firebaseio.com",
          projectId: "vagas-7555f",
          storageBucket: "vagas-7555f.appspot.com",
          messagingSenderId: "38892742038",
          appId: "1:38892742038:web:5b2fa28153cd9af82429b7",
          measurementId: "G-HY858CS9ZV"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
    }

    onChangeLogar(field, value){
        /*const newState = {};
        newState[field] = value;
        this.setState(newState);*/
          //(são iguais)
        this.setState({
          [field] : value
        });
    }
      
      Cadastro () {
        return this.props.navigation.navigate('Cadastro');
      }
        
      Logar () {
        // função que direcionar o usuário se caso passar os dados corretoss
      const loginUserSucess = user =>{
        return this.props.navigation.navigate('Dashboard');
          //this.setState({ message: "Sucesso!" });
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
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(loginUserSucess)
        //if (loginUserSucess)
         //return this.props.navigation.navigate('Dashboard')

          //if (user)
          //return this.props.navigation.navigate('Dashboard');

        .catch(error => {
          if (error.code === 'auth/user-not-found'){
            return Alert.alert(//caixa de alerta de quando o usuário não for encontrar
              'Usuário não encontrado',
              'Deseja criar uma cadastro',
              [{
              text: 'Não',
              onPress: () => console.log('usuário não quer criar conta'),
              style: 'cancel' // IOS, opção de cancelar isso n apacere!
            }, {
              text: 'Sim',
              onPress: () => {
               this.Cadastro ()
               
              /*  firebase
                  .auth()//metódo para autenticar do próprio firebase
                  .createUserWithEmailAndPassword(mail, password) // seria para criar ainda n funciona
                  .then(loginUserSucess)
                  .catch(loginUserFailed)
                  */
              }
            }],
            { cancelable: false }
          )
            }

              loginUserFailed(error);
         
        })
        .then(()=> this.setState({isLoading: false}));
    }

  /* seria um metodo para cada input digitado!
   onChangeMail(mail){
      this.setState({ mail })
   }
   onChangeMail(password){
      this.setState({ password })
   }*/

   // Captura as msg e traduz!

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

//renderiza o botão para logar 
//com a função que faz a junção com o firebase

renderButton(){
    if(this.state.isLoading)
          return <ActivityIndicator />
  return(
     <TouchableOpacity 
    onPress={()=> this.Logar()}
   style = {styles.button}> 
      
       <Text style = {styles.buttonText} >Entrar</Text>
       
   </TouchableOpacity>
  )}

  //renderiza msg de error!

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

return (
<KeyboardAvoidingView style = {styles.back}>
<View style = {styles.topp}>
<Image 
    style = {styles.logo}
    source ={require('./logo1.png')}
    />
</View>

<View 
  style = {[
    styles.centro,
    ]}
  >
 
<Text style={styles.label}>E-mail *</Text>
<TextInput 
   style = {styles.input}
    type = "email"
    placeholder="Digite seu e-mail"
    placeholderTextColor="#C1BCBC"
    value= {this.state.mail}  
    onChangeText={value => this.onChangeLogar('mail', value)}
/>

<Text style={styles.label}>Senha *</Text>
<TextInput 
    style = {styles.input}
    secureTextEntry
    placeholder="Digete sua senha"
    placeholderTextColor="#C1BCBC"     
    autoCapitalize="none"
    value={this.state.password}
     onChangeText={value => this.onChangeLogar('password',value)}
 />


 { this.renderButton() }
  { this.renderMessage() }
 

 <Text style = {styles.ou}>Ou</Text>

 <View>
  
  <View>
  
  <TouchableOpacity onPress={() =>
        LinkingIOS.openURL('https://www.google.com/')}>
 <Image  
    style = {styles.acesso}
    source ={require('./face.png')}
    />
        </TouchableOpacity>
</View>

<View>  
  <TouchableOpacity onPress={() =>
        LinkingIOS.openURL('https://google.com')}>
    <Image 
    style = {styles.acesso}
    source ={require('./googl.png')}
    />
         </TouchableOpacity>
</View>
 
   
</View>
    
<TouchableOpacity>
<Text style = {styles.label2}>Esqueceu sua senha? Recupere</Text>
</TouchableOpacity>
</View>

<View style = { styles.baixo }>
<Text style = {styles.buttonText}>ainda não tem uma conta?</Text>
<TouchableOpacity
//onPress={()=> this.Logar()}
 onPress={()=> this.Cadastro()}>
<Text style = { styles.baixoT }>Cadastre-se agora</Text>
</TouchableOpacity>
</View>

</KeyboardAvoidingView>

);
}
}



const styles = StyleSheet.create({
back: { 
  flex: 1,     
  backgroundColor: '#5835A3',
  alignItems:'center'
},
topp:{ 
    paddingTop: 10
},

logo: {
  maxWidth: 70,
  height: 70,
  borderRadius: 38,
},

centro: {  
  alignItems:'center',  
  marginTop: 10,
  backgroundColor: '#FFF',
  width: '95%',
  paddingBottom: 20,
  borderRadius: 20

},

label: {
  
  fontWeight: 'bold',
  color: '#444',
  marginBottom: 2,
  marginRight: 308,
  marginTop:10
},

label2:{
  fontSize: 15,
  fontWeight: 'bold',
  color: '#444',
  marginRight: 'auto',
  marginTop: 'auto',
  alignItems: 'center',
  alignContent: 'center',
  paddingTop: 20
},

input: {
  backgroundColor: '#FAFAFA',
  width: '90%',
  marginBottom: 15,
  fontSize: 16,
  color: 'black',
  borderRadius: 10,
  padding: 10,
  borderColor: '#5835A3'
},

acesso: {
  alignSelf: "center",
  alignItems:'center',
  alignContent: 'center',
  maxWidth: 60,
  height: 60,
  borderRadius: 40,
  
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

ou: {
padding: 10,
fontWeight: 'bold',
marginLeft: 'auto',
marginRight: 'auto',
},

baixo: {
paddingTop: 20,
alignContent: 'center',
alignItems:'center'
},

baixoT: {
width: '50%',
height: 100,
fontSize: 20,
fontWeight: 'bold',
color: 'yellow'
}

});

