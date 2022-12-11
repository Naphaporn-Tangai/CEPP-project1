import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InOutScreen from './screens/InOutScreen';

const Stack = createStackNavigator();

export default function TabTop() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ลงชื่อเข้า-ออกงาน" component={InOutScreen} />
      </Stack.Navigator>
    );
  }