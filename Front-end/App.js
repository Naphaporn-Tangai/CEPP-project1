import React from 'react';
import { NativeBaseProvider } from "native-base";
import AuthStack from './navigation/AuthStack'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import SchNewCg from './screens/SchNewCg';


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
             <AuthStack/>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}