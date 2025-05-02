import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomePage'; 
import ResultScreen from './ResultPage'; 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Calculadora de Consumo' }} />
        <Stack.Screen name="Resultado" component={ResultScreen} options={{ title: 'Resultado do Consumo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
