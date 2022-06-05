// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Home from './src/pages/Home';
import Adega from './src/pages/Adega';
import Harmonizacao from './src/pages/Harmonizacao';
import Mapa from './src/pages/Mapa';
import Sobre from './src/pages/Sobre';
import Faq from './src/pages/Faq';

const Stack = createNativeStackNavigator();


import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'AsyncStorage',
  
])

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
          title:"Cadastro",
          headerTitleAlign:'center'
        }}
        />

        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:"Home",
          headerTitleAlign:'center'
        }}
        />    

        <Stack.Screen 
        name="Adega" 
        component={Adega} 
        options={{
          title:"Adega",
          headerTitleAlign:'center'
        }}
        />   

        <Stack.Screen 
        name="Harmonizacao" 
        component={Harmonizacao} 
        options={{
          title:"Harmonização",
          headerTitleAlign:'center'
        }}
        />   

        <Stack.Screen 
        name="Mapa" 
        component={Mapa} 
        options={{
          title:"Mapa",
          headerTitleAlign:'center'
        }}
        />   

        <Stack.Screen 
        name="Sobre" 
        component={Sobre} 
        options={{
          title:"Sobre",
          headerTitleAlign:'center'
        }}
        />   

        <Stack.Screen 
        name="Faq" 
        component={Faq} 
        options={{
          title:"FAQ",
          headerTitleAlign:'center'
        }}
        />   



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;