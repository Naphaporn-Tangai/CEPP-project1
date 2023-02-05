import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarList from '../screens/CalendarList';

const Stack = createStackNavigator();

const CalendarNav = () => {
  
  return (
   
      <Stack.Navigator screenOptions={{}} >
        
        <Stack.Screen 
          name="CalendarList"
          component={CalendarList}
          options={{title: "ปฎิทิน"  , headerTitleAlign:"center"}}
          
        />
        
        
         
      </Stack.Navigator>
  
  );
};
export default CalendarNav;