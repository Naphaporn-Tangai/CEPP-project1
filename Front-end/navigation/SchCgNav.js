import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SchNewCg from '../screens/SchNewCg';


const Stack = createStackNavigator();

const SchCgNav = () => {
  console.log(Stack);
  return (
   
      <Stack.Navigator screenOptions={{}} >
        
      
        <Stack.Screen 
          name="SchNewCg"
          component={SchNewCg}
        />
       
       
      </Stack.Navigator>
  
  );
};
export default SchCgNav;