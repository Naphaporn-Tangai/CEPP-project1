import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotifyScreen from '../screens/NotifyScreen'
import { HeaderBackButton } from '@react-navigation/elements';

const Stack = createStackNavigator();

const NotifyNav = () => {
  
  return (
    <Stack.Navigator screenOptions={{}} >
        <Stack.Screen 
          name="Notify"
          component={NotifyScreen}
          options={
            ({ navigation, route }) => ({
              headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={() => {
                        navigation.goBack();
                    }} />
            ) ,
            title: "แจ้งเตือน"  , 
            headerTitleAlign:"center", })}
        />  
        </Stack.Navigator>
  
        );
      };
export default NotifyNav;       