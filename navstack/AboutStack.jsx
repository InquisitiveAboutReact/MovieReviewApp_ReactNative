import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

 const screens = {
  About: {
      screen: About,
      navigationOptions: ({navigation})=>{
        return {
          headerTitle:()=> <Header navigation={navigation} title='About Movie Review'/>
        }
        //title: 'Movie List',
        //headerStyle: {backgroundColor:'#FB8A8A'}
    }
  },
  // ReviewDetails: {
  //     screen: ReviewDetails,
  //     navigationOptions: {
  //       title: 'Reviews',
  //       //headerStyle: {backgroundColor:'#FB8A8A'}
  //   }
  // }
}

const AboutStack = createStackNavigator(screens, {
    /** Default navigation color option. Can be overridden by changing the value in line 11, 18 */
    defaultNavigationOptions:{ 
        headerStyle: {backgroundColor:'#FB8A8A'}
    }
});

//export default createAppContainer(HomeStack)
export default AboutStack;