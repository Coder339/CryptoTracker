import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// import DelTabs from './DelTab';

import Home from '../screens/Home'
import AddCrypto from '../screens/AddCrypto';

const Stack = createStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerShown: false
             }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddCrypto" component={AddCrypto} />
        </Stack.Navigator> 
    )
}




const styles = StyleSheet.create({})
