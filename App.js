import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import React, { useMemo, useState, useEffect,useReducer } from 'react';
import { 
  Button, 
  View,
  StyleSheet, 
  Text,
  ActivityIndicator } from 'react-native';
import { 
  Appearance, 
  AppearanceProvider, 
  useColorScheme } from 'react-native-appearance';

import { createStackNavigator } from "@react-navigation/stack";
// import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer,DarkTheme,DefaultTheme } from '@react-navigation/native';

import  HomeNavigation from './components/HomeNavigation';
import AuthStackScreen from './components/AuthStack';
import { AuthContext } from './utils/Context';


const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
  
  <RootStack.Navigator headerMode="none">
    
    {userToken ? ( 
      <RootStack.Screen
        name="App"
        component={HomeNavigation}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);



export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  

  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (prevState,action) => {
    // console.log('vikas')
    console.log(action.type)
    // console.log(action.token)
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          username: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
    // console.log(action.token)
  };
  
  const [loginState,dispatch] = useReducer(loginReducer,initialLoginState)
  

  const authContext = useMemo(() => ({
      signIn: async(username,password) => {
        // setIsLoading(false);
        // setUserToken("asdf");
        // console.log('test')

        console.log(username)
        // console.log(password)
        let userToken;
        userToken = null;
        if(username === 'admin' && password === 'admin123'){
          try {
            userToken = 'asdf'
            await AsyncStorage.setItem('userToken', userToken)
          } catch (e) {
            console.log(e)
          }
        }
        dispatch({ type: 'LOGIN',id: username, token: userToken})
        // console.log(userToken)
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: async() => {
        // setIsLoading(false);
        // setUserToken(null);
        try {
          await AsyncStorage.removeItem('userToken')
          console.log('token')
          // console.log('userToken',userToken)
        } catch (e) {
          console.log(e)
        }
        dispatch({type: 'LOGOUT'})
      },
  
  }), []);
  

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({type: 'RETRIEVE_TOKEN',token: userToken})
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return <View style={styles.container}>
              <ActivityIndicator size="large" color="#0000ff" />
           </View>;
  }
  else {

    return (
      
      
         <AppearanceProvider>
            <AuthContext.Provider value={authContext}>
              <NavigationContainer>
                <RootStackScreen userToken={loginState.userToken}/>
              </NavigationContainer>
            </AuthContext.Provider>
          </AppearanceProvider>
  

    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 650,
    // resizeMode: 'contain',

  }
});
