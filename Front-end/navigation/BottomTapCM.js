import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import HomeCm from '../screens/cm/HomeCm';
import NotifyNav from './NotifyNav'
import CalendarNav from './CalendarNav';

import EditProfileNav from './EditProfileNav';
import SchCmNav from './SchCmNav';

import { View, Center  } from 'native-base'
import { Ionicons ,FontAwesome5 ,AntDesign} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function BottomTapCM() {
  const navigation = useNavigation();
    return (
      <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false ,headerShown: false ,showLabel: false ,tabBarStyle:{ height: 60,shadowColor: '#000', }}}>
         <Tab.Screen name="HomeCm" component={HomeCm} options={{ headerShown: false ,
           tabBarIcon: ({ focused }) => (
           <View style={{ top: '3%'}} >
               <Ionicons
                 name="home-sharp"
                 size={25}
                 color={focused ? '#35609C': 'gray'}
         ></Ionicons>
         
        </View>  )}} />
         <Tab.Screen name="CalendarNav" component={CalendarNav} options={{ 
           tabBarIcon: ({ focused }) => (
           <View style={{ top: '3%'}} >
               <FontAwesome5
                 name="calendar-alt"
                 size={25}
                 color={focused ? '#35609C': 'gray'}
         ></FontAwesome5>
         
        </View>  )}} />
         <Tab.Screen name="SchCmNav" component={SchCmNav} options={{ 
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
           <View style={{ top: '3%'}} >
               <Ionicons
                 name="notifications"
                 size={25}
                 color={focused ? '#35609C': 'gray'}
         ></Ionicons>
         
        </View>  )}} />
         <Tab.Screen name="EditProfileNav" component={EditProfileNav} options={{ 
           tabBarIcon: ({ focused }) => (
           <View style={{ top: '3%'}} >
               <FontAwesome5
                 name="user-alt"
                 size={25}
                 color={focused ? '#35609C': 'gray'}
         ></FontAwesome5>
         
        </View>  )}} />
       </Tab.Navigator>
    );
  }