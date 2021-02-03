import React from 'react';
import { Image } from 'react-native'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { AppStackNavigator } from './AppStackNavigator'
import ViewInfoScreen from '../screens/ViewInfoScreen';
import AddInfoScreen from '../screens/AddInfoScreen';

const AppTabNavigator = createBottomTabNavigator({
  ViewInfo : {
    screen: ViewInfoScreen,
    navigationOptions :{
      //tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "View Information",
    }
  },
  AddInfo: {
    screen: AddInfoScreen,
    navigationOptions :{
      //tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Add Information",
    }
  }
});

export default AppTabNavigator;