import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Center } from "native-base";
import Login from "./screens/Login"
import Register from "./screens/Register"
import Forgot from "./screens/Forgot"
import ResetPass from "./screens/ResetPass"
import HomeCm from './screens/HomeCm';
import HomeCg from './screens/HomeCg';
import ConfirmReset from "./screens/ConfirmReset"
import InOutScreen from './screens/InOutScreen';
import CmCgScreen from './screens/CmCgScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';

let customFonts = {
  'Regular': require('./assets/fonts/Prompt-Regular.ttf'),
  'Medium': require('./assets/fonts/Prompt-Medium.ttf'),
};

const Stack = createStackNavigator();
export default class App extends React.Component {

  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }


    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <View style={styles.container} >
            <Center flex={1} >
              
              <Stack.Navigator>
                <Stack.Screen name="ลงชื่อเข้าใช้" component={Login} />
                <Stack.Screen name="ลงทะเบียน" component={Register} />
                <Stack.Screen name="ลืมรหัส" component={Forgot} />
                <Stack.Screen name="รีเซ็ต" component={ResetPass} />
                <Stack.Screen name="cm/cg" component={CmCgScreen} />
                <Stack.Screen name="ลงชื่อเข้า-ออกงาน" component={InOutScreen} />
              </Stack.Navigator>
    
           
            </Center>
          </View>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%"

  },
});