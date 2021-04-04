import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebook from './Screens/facebook';
import Instagram from './Screens/instagram';
import Header from './Header';
export default class App extends React.Component {
  render(){
    return (
     <AppContainer/> 
    );
  }
}

const tabnavigator=createBottomTabNavigator({
  Instagram:{screen:Instagram},
  Facebook:{screen:Facebook},
})

const AppContainer =createAppContainer(tabnavigator)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});