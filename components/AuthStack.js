import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../screens/Login';
import Welcome from '../screens/Welcome';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
    <AuthStack.Screen
      name="Welcome"
      component={Welcome}
      options={{ title: "W E L C O M E" }}
    />
    <AuthStack.Screen
      name="SignIn"
      component={Login}
      options={{ title: "Sign In" }}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;