import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SchNewCg from '../screens/cg/SchNewCg';
import { HeaderBackButton } from '@react-navigation/elements';

const Stack = createStackNavigator();

const SchCgNav = () => {
  
  return (
   
      <Stack.Navigator screenOptions={{}} >
        
      
        <Stack.Screen 
          name="SchNewCg"
          component={SchNewCg}
          options={
            ({ navigation, route }) => ({
              headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={() => {
                        navigation.goBack();
                    }} />
            ) ,
            title: "สร้างกำหนดการ"  , 
            headerTitleAlign:"center", })}
        />
       
       
      </Stack.Navigator>
  
  );
};
export default SchCgNav;