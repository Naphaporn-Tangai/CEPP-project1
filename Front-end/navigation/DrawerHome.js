import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import EditProfileNav from "./EditProfileNav";
import Login from "../screens/user/Login";
import HomeCg from "../screens/cg/HomeCg";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import DatumNav from "./DatumNav";
const Drawer = createDrawerNavigator();

const DrawerHome = () => {
  return (
    
      <Drawer.Navigator useLegacyImplementation 
      drawerPosition="right"      
      screenOptions={{
       
      }}>
        <Drawer.Screen name="หน้าหลัก" component={AuthStack} options={{headerShown: false}}/>
        <Drawer.Screen name="โปรไฟล์" component={EditProfileNav}  options={{headerShown: false}}/>
        <Drawer.Screen name="สถิติ" component={DatumNav} options={{headerShown: false}}/>
        <Drawer.Screen name="ออกจากระบบ" component={Login} options={{headerShown: false}}/>
      </Drawer.Navigator>
 
  );
};
export default DrawerHome;
