import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotifyScreen from '../screens/NotifyScreen'


const Stack = createStackNavigator();

const NotifyNav = () => {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} >
        <Stack.Screen 
          name="Notify"
          component={NotifyScreen}
        />  
        </Stack.Navigator>
  
        );
      };
export default NotifyNav;       