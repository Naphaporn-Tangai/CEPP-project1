import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from '../screens/EditProfile';

const Stack = createStackNavigator();

const EditProfileNav = () => {
  console.log(Stack);
  return (
   
      <Stack.Navigator screenOptions={{}} >
        
      
        <Stack.Screen 
          name="EditProfile"
          component={EditProfile}
        />
       
       
      </Stack.Navigator>
  
  );
};
export default EditProfileNav;