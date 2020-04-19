
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#DA552F" barStyle="light-content"></StatusBar>
      <Stack.Navigator>
        <Stack.Screen name="JSHunt" component={Main} options={{
          headerStyle: {
            backgroundColor: '#DA552F',
          },
          headerTitleAlign: "center",
          headerTintColor: '#fff'
        }}
        />
        <Stack.Screen name="Product" component={Product} options={{
          headerStyle: {
            backgroundColor: '#DA552F',
          },
          headerTitleAlign: "center",
          headerTintColor: '#fff'
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}