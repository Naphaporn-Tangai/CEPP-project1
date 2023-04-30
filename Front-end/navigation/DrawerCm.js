import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import EditCm from "./EditCm";
import Login from "../screens/user/Login";
import HomeCg from "../screens/cg/HomeCg";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import DatumNav from "./DatumNav";
const Drawer = createDrawerNavigator();

const DrawerCm = () => {
  return (
    
      <Drawer.Navigator useLegacyImplementation 
      drawerPosition="right"      
      screenOptions={{
       
      }}>
        <Drawer.Screen name="หน้าหลัก" component={AuthStack} options={{headerShown: false}}/>
        <Drawer.Screen name="โปรไฟล์" component={EditCm}  options={{headerShown: false}}/>
        <Drawer.Screen name="สถิติ" component={DatumNav} options={{headerShown: false}}/>
        <Drawer.Screen name="ออกจากระบบ" component={Login} options={{headerShown: false}}/>
      </Drawer.Navigator>
 
  );
};
export default DrawerCm;
