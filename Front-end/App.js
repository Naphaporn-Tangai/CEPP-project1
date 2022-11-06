import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import Login from "./components/Login"
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
    <View style={styles.container} >
     
        <Login/>
      
    </View>
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
  },
});