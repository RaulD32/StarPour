import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home';
import RegistroProfesional from './registro';
import Config from './config';
import FormularioInformacion from './alarma'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="registro">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="registro" component={RegistroProfesional} />
        <Stack.Screen name="alarma" component={FormularioInformacion} />
        <Stack.Screen name="config" component={Config} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
