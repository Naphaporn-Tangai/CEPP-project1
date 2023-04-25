import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SchNewCm from '../screens/cm/SchNewCm';
import { HeaderBackButton } from '@react-navigation/elements';

const Stack = createStackNavigator();

const SchCmNav = () => {
  
  return (
   
      <Stack.Navigator screenOptions={{}} >
        
      
        <Stack.Screen 
          name="SchNewCm"
          component={SchNewCm}
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
export default SchCmNav;