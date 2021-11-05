import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import About from './screens/About';
import HomeStack from './navstack/HomeStack';
import Navigator from './navstack/Drawer'

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Navigator />
    )
  }else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=>setFontLoaded(true)}
        onError={() => console.log('error')}
      />
    )
  }
  return (
  <Home />
  );
}


