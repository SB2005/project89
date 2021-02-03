import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AppTabNavigator from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import ContactScreen from '../screens/ContactScreen';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  Contacts : {
    screen : ContactScreen
  },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
