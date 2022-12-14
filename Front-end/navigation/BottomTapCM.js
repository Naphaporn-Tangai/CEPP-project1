import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeCm from '../screens/HomeCm';
import NotifyScreen from '../screens/NotifyScreen'
import Calendar from '../screens/Calendar';
import EditProfile from '../screens/EditProfile';
import SchNewCm from '../screens/SchNewCm';

const Tab = createBottomTabNavigator();

export default function BottomTapCM() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomeCm" component={HomeCm} options={{ headerShown: false}}/>
        <Tab.Screen name="Calendar" component={Calendar} /> 
        <Tab.Screen name="SchNewCm" component={SchNewCm} /> 
        <Tab.Screen name="Notify" component={NotifyScreen} />
        <Tab.Screen name="EditProfile" component={EditProfile} />
      </Tab.Navigator>
    );
  }