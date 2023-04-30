import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DatumCG from '../screens/cg/DatumCG'
import { HeaderBackButton } from '@react-navigation/elements';

const Stack = createStackNavigator();

const NotifyNav = () => {
  
  return (
    <Stack.Navigator screenOptions={{}} >
        <Stack.Screen 
          name="DatumCG"
          component={DatumCG}
          options={
            ({ navigation, route }) => ({
              headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={() => {
                        navigation.goBack();
                    }} />
            ) ,
            title: "สถิติ"  , 
            headerTitleAlign:"center", })}
        />  
        </Stack.Navigator>
  
        );
      };
export default NotifyNav;       