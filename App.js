import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Main from './Screen/Main';
import SplashScreen from './Screen/SplashScreen';
import { Image, Text, View,StyleSheet, TouchableOpacity ,ImageBackground} from 'react-native';
import Header from './Screen/Header';



const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash-screen">
        
        <Stack.Screen 
          name="splash-screen" 
          component={SplashScreen}
          options={{
            headerShown:false
          }}/>
        <Stack.Screen 
          name="Main" 
          component={Main}
          options={{
            header:()=><Header/>,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const style = StyleSheet.create({
  text:{
    fontSize:'18px',
    fontWeight:'600',
    color:'#fff'
  },
  MainView:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    height:'100vh',
    backgroundColor:'#8FD6E12d'
  },
  Form:{
    width:'300px',
    height:'250px',
    margin:'1%',
    backgroundColor:'#0000009d',
    borderRadius:'5%',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:'-10%'
  },
  TextFeild:{
    width:'250px',
    height:'30px',
    backgroundColor:'#fff',
    borderRadius:'10px',
    marginTop:'10px',
    marginBottom:'10px',
    padding:'3%'
  },
  Label:{
    fontSize:'16px',
    fontWeight:'600',
    color:'#fff'
  },
  Button:{
    width:'100px',
    height:'30px',
    borderRadius:'20px',
    backgroundColor:'#1597BB',
    justifyContent:'center',
    alignItems:'center'
  }
})