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
import DrawerHome from "./DrawerHome";
import ReturnDev from "../screens/ReturnDev";
import Article from "../screens/Article";
import EventDay from "../screens/EventDay";
import ShowPickRe from "../screens/ShowPickRe";
import PickUpDev from "../screens/PickUpDev";
import Report from "../screens/Report";
import Clip from "../screens/Clip";
import MapCurrent from "../screens/MapCurrent";

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
        options={{headerShown: false}}
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
        options={{ title: "ลงชื่อเข้า-ออกงาน"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
        <Stack.Screen 
        name="DrawerHome"
        component={DrawerHome}
       
        />
        
          <Stack.Screen
        name="Article"
        component={Article}
        options={{ title: "บทความ"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
     
         <Stack.Screen
         name="EventDay"
         component={EventDay}
         options={{ title: "กำหนดการ"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
         />
       <Stack.Screen
        name="ReturnDev"
        component={ReturnDev}
        options={{ title: "คืนอุปกรณ์"  , headerTitleAlign:"center" , fontFamily: "Medium" }}
        />
        <Stack.Screen
        name="PickUpDev"
        component={PickUpDev}
        options={{ title: "เบิกอุปกรณ์"  , headerTitleAlign:"center" , fontFamily: "Medium" }}
        />
        <Stack.Screen
        name="ShowPickRe"
        component={ShowPickRe}
        options={{ title: "เบิกอุปกรณ์"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
           <Stack.Screen
        name="Report"
        component={Report}
        options={{ title: "แจ้งปัญหา"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
        <Stack.Screen
        name="Clip"
        component={Clip}
        options={{ title: "สื่อความรู้"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
        <Stack.Screen
        name="MapCurrent"
        component={MapCurrent}
        options={{ title: "สถานที่"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
      </Stack.Navigator>

      
  );
};
export default AuthStack;