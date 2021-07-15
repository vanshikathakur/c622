import * as React from 'react';
import {View,Text,Button,StyleSheet,Image} from 'react-native';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
import AppHeader from './components/AppHeader';
import HomeScreen from './Screens/HomeScreen';
import SummaryScreen from './Screens/SummaryScreen';

export default class App extends React.Component{

  render(){
    return(
      <View style={styles.container}>
      <AppHeader />
      <AppContainer />   
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
  
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow'
  }
});