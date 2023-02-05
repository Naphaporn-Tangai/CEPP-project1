import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register"
import Forgot from "../screens/Forgot"
import ResetPass from "../screens/ResetPass"

import ConfirmReset from "../screens/ConfirmReset"
import InOutScreen from '../screens/InOutScreen';

import BottomTapCM from "./BottomTapCM";
import BottomTapCG from './BottomTapCG'
import CmCgScreen from '../screens/CmCgScreen';



const Stack = createStackNavigator();

const AuthStack = () => {
 
  return (
   
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ConfirmReset"
          component={ConfirmReset}
          options={{headerShown: false}}
        />  
       
        <Stack.Screen
        name="BottomTapCM"
        component={BottomTapCM}
       
        />
        <Stack.Screen
        name="BottomTapCG"
        component={BottomTapCG}
        options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="CmCgScreen"
          component={CmCgScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="InOutScreen"
        component={InOutScreen}
        options={{ title: "ลงชื่อเข้า-ออกงาน"  , headerTitleAlign:"center" }}
        />
       
      </Stack.Navigator>
      
  );
};
export default AuthStack;