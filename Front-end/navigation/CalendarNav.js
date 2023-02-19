import React from "react";
import { createStackNavigator  } from "@react-navigation/stack";
import { HeaderBackButton } from '@react-navigation/elements';
import CalendarList from '../screens/CalendarList';

const Stack = createStackNavigator();

const CalendarNav = () => {
  
  return (
   
      <Stack.Navigator screenOptions={{}} >
        
        <Stack.Screen 
          name="CalendarList"
          component={CalendarList}
          
          options={
          ({ navigation, route }) => ({
            headerLeft: (props) => (
              <HeaderBackButton
                  {...props}
                  onPress={() => {
                      navigation.goBack();
                  }} />
          ) ,
          title: "ปฎิทิน"  , 
          headerTitleAlign:"center", })}
          
        />

      </Stack.Navigator>
  
  );
};
export default CalendarNav;