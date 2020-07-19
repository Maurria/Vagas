import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Profile from './src/pages/Profile';
import { RegisterParking, Private, Residencial } from './src/pages/RegisterParking';
import Search from './src/pages/Search';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// Cadastros de vagas
function Registers() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastrar Vaga" component={ RegisterParking } 
        options={{
          title:'Cadastrar Vaga',
           headerTintColor: 'white', 
           headerStyle: {
              backgroundColor: '#5835A3',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
              flex:1,
            }
        }}
      />
      <Stack.Screen name="Private" component={ Private } 
        options={{
          title:'Privada',
            headerTintColor: 'white', 
            headerStyle: {
              backgroundColor: '#5835A3',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
              flex: 1
            }
        }}
      />
      <Stack.Screen name="Residencial" component={ Residencial } 
        options={{
          title:'Residencial',
          headerTintColor: 'white', 
          headerStyle: {
            backgroundColor: '#5835A3',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5'
          },
          headerTitleStyle: {
            flex: 1
          }
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Procurar Vaga' barStyle={{ backgroundColor: '#5835A3' }} >
        <Tab.Screen name="Perfil" component={ Profile } 
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons  name="account" color={color} size={22} />
            ),
          }}
        />

        <Tab.Screen name='Procurar Vaga' component={ Search } options={{
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons  name="magnify" color={color} size={22} />
          ),
        }}/>

        <Tab.Screen name='CadastrarVaga' component={ Registers } options={{
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons  name="content-paste" color={color} size={20} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}