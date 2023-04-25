import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from '../screens/user/EditProfile';
import { HeaderBackButton } from '@react-navigation/elements';

const Stack = createStackNavigator();

const EditProfileNav = () => {
  
  return (
   
      <Stack.Navigator screenOptions={{}} >
        
      
        <Stack.Screen 
          name="EditProfile"
          component={EditProfile}
          options={
            ({ navigation, route }) => ({
              headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={() => {
                        navigation.goBack();
                    }} />
            ) ,
            title: "ข้อมูลส่วนตัว"  , 
            headerTitleAlign:"center", })}
        />
       
       
      </Stack.Navigator>
  
  );
};
export default EditProfileNav;