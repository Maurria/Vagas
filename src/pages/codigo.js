<KeyboardAvoidingView style = {styles.back}>
  
  <View style = {styles.cab}>
    <Image 
    style = {styles.logo}
    source ={require('./assets/logo1.png')}
    />
  </View> 

  <Animated.View 
    style = {[
      styles.centro,
      {
        opacity: opacity,
        transform: [
          { translateY: offset.y }
        ]
      }]}
    >
   
  <Text style={styles.label}>E-mail *</Text>
  <TextInput 
     style = {styles.input}
      placeholder="Digite seu e-mail"
      placeholderTextColor="#C1BCBC"
      autoCapitalize="none"
      onChangeText={ () => false }
  />

  <Text style={styles.label}>Senha *</Text>
  <TextInput 
      style = {styles.input}
      placeholder="Digete sua senha"
      placeholderTextColor="#C1BCBC"     
      autoCapitalize="none"
      onChangeText={ () => false }
      
   />

   <TouchableOpacity style = {styles.button} onPress= {essaRoda} > 
      
       <Text style = {styles.buttonText} >Entrar</Text>
       
   </TouchableOpacity>

   <Text style = {styles.ou}>Ou</Text>

   <View>
     <TouchableOpacity onPress= {essaRoda}>
    <Image style = {styles.acesso}
    source ={require('./assets/face.png')}  onPress= {essaRoda}
     /></TouchableOpacity>

     <TouchableOpacity onPress= {essaRoda}>
      <Image style = {styles.acesso} 
    source ={require('./assets/google.png')} 
     />
     </TouchableOpacity>
  </View>
      
  <TouchableOpacity onPress= {Recupero}>
  <Text style = {styles.label2}>Esqueceu sua senha? Recupere</Text>
  </TouchableOpacity>
</Animated.View>

<View style = { styles.baixo }>
<Text style = {styles.buttonText}>ainda não tem uma conta?</Text>
  <TouchableOpacity onPress= {cadastroB}>
  <Text style = { styles.baixoT }>Cadastre-se agora</Text>
  </TouchableOpacity>
</View>

</KeyboardAvoidingView>

);
}

const styles = StyleSheet.create({
  back: {     
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5835A3',
  },

  cab: {
    marginTop: 10,
    height:10,
    width: '100%',
    alignItems:'center',
    alignContent: 'center'
  
  },

  logo: {
    marginTop: 30,
    maxWidth: 70,
    height: 70,
    borderRadius: 38,
  },

  centro: {  
    display: "flex",
    marginTop: 100,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#FFF',
    borderRadius: 10,
    padding: 10,
    borderColor: '#5835A3'
},

  acesso: {
    alignSelf: "center",
    alignItems:'center',
    alignContent: 'center',
    maxWidth: 80,
    height: 80,
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