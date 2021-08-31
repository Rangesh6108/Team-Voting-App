import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import SubmissionScreen from './screens/SubmissionScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appcontainer}>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SubmissionScreen:SubmissionScreen
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  appcontainer:{
    backgroundColor:'#262d31'
  }
})
