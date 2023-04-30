import React from 'react';
import { NativeBaseProvider } from "native-base";
import DrawerHome from './navigation/DrawerHome'
import DrawerCm from './navigation/DrawerCm'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';



let customFonts = {
  'Regular': require('./assets/fonts/Prompt-Regular.ttf'),
  'Medium': require('./assets/fonts/Prompt-Medium.ttf'),
};


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
             <DrawerHome/>
             
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}