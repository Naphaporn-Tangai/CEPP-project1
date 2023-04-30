import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/user/Login";
import Register from "../screens/user/Register"
import Forgot from "../screens/user/Forgot"
import ResetPass from "../screens/user/ResetPass"

import ConfirmReset from "../screens/user/ConfirmReset"
import InOutScreen from '../screens/InOutScreen';

import BottomTapCM from "./BottomTapCM";
import BottomTapCG from './BottomTapCG'
import CmCgScreen from '../screens/CmCgScreen';

import ReturnDev from "../screens/equipment/ReturnDev";
import EventDay from "../screens/EventDay";
import ShowPickRe from "../screens/equipment/ShowPickRe";
import PickUpDev from "../screens/equipment/PickUpDev";
import Report from "../screens/Report";
import Clip from "../screens/videoScreen/Clip";
import MapCurrent from "../screens/map/MapCurrent";
import VideoScreen from "../screens/videoScreen/VideoScreen"
import Signature from "../screens/Signature";
import SeleteEvent from "../screens/SeleteEvent";
import MapSch from "../screens/map/MapSch"
import DatumCG from "../screens/cg/DatumCG"
import MapEvent from "../screens/map/MapEvent"
import WorkCG from "../screens/cm/WorkCG";
import { Addlocation } from "../components";

const Stack = createStackNavigator();

const AuthStack = () => {
 
  return (
   
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ConfirmReset"
          component={ConfirmReset}
          options={{headerShown: false}}
        />  
       
        <Stack.Screen
        name="BottomTapCM"
        component={BottomTapCM}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="BottomTapCG"
        component={BottomTapCG}
        options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="CmCgScreen"
          component={CmCgScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="InOutScreen"
        component={InOutScreen}
        options={{ title: "ลงชื่อเข้า-ออกงาน"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
     
         <Stack.Screen
         name="EventDay"
         component={EventDay}
         options={{ title: "กำหนดการ"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
         />
       <Stack.Screen
        name="ReturnDev"
        component={ReturnDev}
        options={{ title: "คืนอุปกรณ์"  , headerTitleAlign:"center" , fontFamily: "Medium" }}
        />
        <Stack.Screen
        name="PickUpDev"
        component={PickUpDev}
        options={{ title: "เบิกอุปกรณ์"  , headerTitleAlign:"center" , fontFamily: "Medium" }}
        />
        <Stack.Screen
        name="ShowPickRe"
        component={ShowPickRe}
        options={{ title: "เบิกอุปกรณ์"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
           <Stack.Screen
        name="Report"
        component={Report}
        options={{ title: "แจ้งปัญหา"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
        <Stack.Screen
        name="Clip"
        component={Clip}
        options={{ title: "สื่อความรู้"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
        />
         <Stack.Screen
        name="MapCurrent"
        component={MapCurrent}
        options={{ title: "สถานที่"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
      />
      <Stack.Screen
        name="MapSch"
        component={MapSch}
        options={{ title: "สถานที่"  , headerTitleAlign:"center" , fontFamily: "Medium"}}
      />
        <Stack.Screen
        name="Video"
        component={VideoScreen}
        options={{ title: "วิดีโอ" , headerTitleAlign:"center" , fontFamily: "Medium" }}
      />
      <Stack.Screen
        name="Signature"
        component={Signature}
        options={{ title: "เซ็นชื่อ" , headerTitleAlign:"center" , fontFamily: "Medium" }}
      />
         <Stack.Screen
        name="SeleteEvent"
        component={SeleteEvent}
        options={{ title: "กำหนดการ" , headerTitleAlign:"center" , fontFamily: "Medium" }}
      />
               <Stack.Screen
        name="DatumCG"
        component={DatumCG}
        options={{ title: "สถิติ" , headerTitleAlign:"center" , fontFamily: "Medium" }}
      />
                     <Stack.Screen
        name="MapEvent"
        component={MapEvent}
        options={{ title: "สถานที่" , headerTitleAlign:"center" , fontFamily: "Medium" }}
      />
                           <Stack.Screen
        name="WorkCG"
        component={WorkCG}
        options={{ title: "การทำงานของ CG" , headerTitleAlign:"center" , fontFamily: "Medium" }}
      />

            </Stack.Navigator>

      
  );
};
export default AuthStack;