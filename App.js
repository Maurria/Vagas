import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Sobre from './src/pages/Sobre';
import Dashboard from './src/pages/Dashboard';
import Cadastro from './src/pages/Cadastro';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


const Stack = createStackNavigator();

 export default function App () {  
 
    return(
      <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="inicio" 
        component={Home}
        options={{
          title: 'Bem vindo(a)',
           headerTintColor: 'white', 
           headerStyle: {
              backgroundColor: '#5835A3',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
              
              textAlign: 'center'
            }
        }}
        />
        <Stack.Screen name="Login" component={Login}
        options={{
          title:'Login',
           headerTintColor: 'white', 
           headerStyle: {
              backgroundColor: '#5835A3',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
               marginLeft: 115
              
              
            }
        }}/>
        <Stack.Screen name="Sobre" component={Sobre} 
        options={{
          title:'Sobre',
           headerTintColor: 'white', 
           headerStyle: {
              backgroundColor: '#5835A3',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
              flexGrow:1,
              marginLeft: 115
              
            }
        }}
        />

        <Stack.Screen name="Dashboard" component={Dashboard} 
        options={{
          title:'Dashboard',
           headerTintColor: 'white', 
           headerStyle: {
              backgroundColor: '#5835A3',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
              alignContent: 'center'
              
              
            }
        }}
        />

        <Stack.Screen name="Cadastro" component={Cadastro} 
        options={{
          title:'Cadastro',
           headerTintColor: 'white', 
           headerStyle: {
              backgroundColor: '#5835A3',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
              alignContent: 'center'
              
              
            }
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
}



