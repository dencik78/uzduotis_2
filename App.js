import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import ManoNavigator from './navigate'

const fonts = () => Font.loadAsync({
  'akronim': require('./fonts/Akronim-Regular.ttf')
});



export default function App(){
  const [font, setFont] = useState(false);

  if(font){
    return(
    <ManoNavigator />
    );
  } else {
      return (
        <AppLoading 
            startAsync={fonts}
            onFinish={() => setFont(true)} 
            onError={console.warn}
        />
      );
  }
}

const styles = StyleSheet.create({
 
})


