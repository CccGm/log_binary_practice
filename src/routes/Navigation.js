import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import SwipDelete from '../Screens/SwipDelete';
import GestureDelete from '../Screens/GestureDelete';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Swip" component={SwipDelete} />
        <Stack.Screen name="Gesture" component={GestureDelete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
