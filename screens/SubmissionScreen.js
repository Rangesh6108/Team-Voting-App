import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class SubmissionScreen extends React.Component {
  render() {
    return (
      <View style={styles.appcontiner}>

      <AppHeader/>
        <Text style={styles.textContiner}>Your responce has been recorded!</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  appcontiner:{
    backgroundColor:'#262d31',
    marginBottom:500
  },
  textContiner:{
    color:'white',
    fontSize: 20
  }
})
