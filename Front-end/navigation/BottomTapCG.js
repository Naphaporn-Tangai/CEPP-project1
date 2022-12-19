import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeCg from '../screens/HomeCg';
import NotifyScreen from '../screens/NotifyScreen'
import CalendarList from '../screens/CalendarList';
import EditProfile from '../screens/EditProfile';
import SchNewCg from '../screens/SchNewCg';
import { View, Center  } from 'native-base'
import { Ionicons ,FontAwesome5 ,AntDesign} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTapCG() {
    return (
     <Tab.Navigator
     tabBarOptions={{ showLabel: false, style:{ height: 100 ,shadowColor: '#000', }}}>
        <Tab.Screen name="HomeCg" component={HomeCg} options={{ headerShown: false ,
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '1%'}} >
              <Ionicons
                name="home-sharp"
                size={20}
                color={focused ? '#35609C': 'gray'}
        ></Ionicons>
        
       </View>  )}} />
        <Tab.Screen name="Calendar" component={CalendarList} options={{ 
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '1%'}} >
              <FontAwesome5
                name="calendar-alt"
                size={20}
                color={focused ? '#35609C': 'gray'}
        ></FontAwesome5>
        
       </View>  )}} />
        <Tab.Screen name="SchNewCg" component={SchNewCg} options={{ 
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '1%'}} >
              <AntDesign
                name="pluscircle"
                size={20}
                color={focused ? '#35609C': 'gray'}
        ></AntDesign>
        
       </View>  )}} />
        <Tab.Screen name="Notify" component={NotifyScreen} options={{ 
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '1%'}} >
              <Ionicons
                name="notifications"
                size={20}
                color={focused ? '#35609C': 'gray'}
        ></Ionicons>
        
       </View>  )}} />
        <Tab.Screen name="EditProfile" component={EditProfile} options={{ 
          tabBarIcon: ({ focused }) => (
          <View style={{ top: '1%'}} >
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? '#35609C': 'gray'}
        ></FontAwesome5>
        
       </View>  )}} />
      </Tab.Navigator>
    );
  }