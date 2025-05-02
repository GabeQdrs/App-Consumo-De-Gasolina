import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Resultado from './src/pages/Resultado';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Consumo de Combustível' }}
        />
        <Stack.Screen 
          name="Resultado" 
          component={Resultado} 
          options={{ title: 'Resultado' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}