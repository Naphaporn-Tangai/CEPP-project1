import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import HomeCg from '../screens/HomeCg';
import NotifyNav from './NotifyNav'
import CalendarNav from './CalendarNav';

import EditProfileNav from './EditProfileNav';
import SchCgNav from './SchCgNav';
import { View, Center  } from 'native-base'
import { Ionicons ,FontAwesome5 ,AntDesign} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function BottomTapCG() {
   const navigation = useNavigation();
    return (
     <Tab.Navigator
     
     screenOptions={{ tabBarShowLabel: false ,headerShown: false ,tabBarStyle:{ height: 60,shadowColor: '#000', }}}>
        <Tab.Screen name="HomeCg" 
        component={HomeCg} options={{ 
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '-3%'}} >
              <Ionicons
                name="home-sharp"
                size={25}
                color={focused ? '#35609C': 'gray'}
        ></Ionicons>
        
       </View>  )}} />
        <Tab.Screen  
        name="CalendarNav"
        component={CalendarNav}
        
        options={{  
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '-3%'}} >
              <FontAwesome5
                name="calendar-alt"
                size={25}
                color={focused ? '#35609C': 'gray'}
        >

        </FontAwesome5>
        
       </View>  )}} />
        <Tab.Screen name="SchCgNav" component={SchCgNav} 
        
        options={{ 
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '-30%'}} >
              <AntDesign
                name="pluscircle"
                size={50}
                color={focused ? '#35609C': 'gray'}
        ></AntDesign>
        
       </View>  )}} />
        <Tab.Screen name="NotifyNav" component={NotifyNav} options={{ 
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '-3%'}} >
              <Ionicons
                name="notifications"
                size={25}
                color={focused ? '#35609C': 'gray'}
        ></Ionicons>
        
       </View>  )}} />
        <Tab.Screen name="EditProfileNav" component={EditProfileNav} options={{ 
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '-3%'}}>
              <FontAwesome5
                name="user-alt"
                size={25}
                color={focused ? '#35609C': 'gray'}
        ></FontAwesome5>
        
       </View>  )}} />
      </Tab.Navigator>
    );
  }