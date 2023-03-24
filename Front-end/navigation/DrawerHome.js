import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Datum from '../screens/DatumCG';
import EditProfileNav from './EditProfileNav';
import Login from '../screens/Login';
import BottomTapCG from './BottomTapCG';

const Drawer = createDrawerNavigator();

const DrawerHome = () => {
  return (
    <Drawer.Navigator
    useLegacyImplementation
    drawerStyle={{
        width: '80%',
      }}
      drawerType="slide"
      edgeWidth={50}
      drawerPosition="right"
    >
      <Drawer.Screen
        name="BottomTapCG"
        component={BottomTapCG}
        
      />
      <Drawer.Screen name="EditProfileNav" component={EditProfileNav} />
      <Drawer.Screen name="Datum" component={Datum} />
      <Drawer.Screen name="LogOut" component={Login} />
    </Drawer.Navigator>
  );
};
export default DrawerHome;