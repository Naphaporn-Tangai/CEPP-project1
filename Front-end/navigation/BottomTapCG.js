import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeCg from '../screens/HomeCg';
import NotifyScreen from '../screens/NotifyScreen'
import Calendar from '../screens/Calendar';
import EditProfile from '../screens/EditProfile';
import SchNewCg from '../screens/SchNewCg';

const Tab = createBottomTabNavigator();

export default function BottomTapCM() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomeCg" component={HomeCg} options={{ headerShown: false}}/>
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="SchNewCg" component={SchNewCg} />
        <Tab.Screen name="Notify" component={NotifyScreen} />
        <Tab.Screen name="EditProfile" component={EditProfile} />
      </Tab.Navigator>
    );
  }