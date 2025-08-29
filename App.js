
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterListScreen from './screens/CharacterListScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CharacterList" component={CharacterListScreen} options={{ title: 'Dragon Ball Characters' }} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} options={{ title: 'Character Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
