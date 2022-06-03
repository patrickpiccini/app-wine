// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
      screenOptions={{ 
        headerTintColor:"white", 
        headerStyle:{backgroundColor: '#8A0B14'}}}
      >

        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{
          title:"Cadastro"
        }}
        />

        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:"Home"
        }}
        />    



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;