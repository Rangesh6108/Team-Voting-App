import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {
  teamA() {
    db.ref('/').update({
      teamA:1,
    });
  }

  teamB() {
    console.log(db);
    db.ref('/').update({
      teamB:1,
    });
  }

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>Vote Here</Text>
            <TouchableOpacity style={styles.buttons} onPress={this.teamA()}>
              <Text style={styles.textContainer}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={this.teamB()}>
              <Text style={styles.textContainer}>Team B</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SubmissionScreen');
              }}
              style={styles.submitbutton}>
              <Text style={styles.textSubmit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor: '#676767',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    width: 100,
    height: 50,
    opacity: 105,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  textContainer: {
    fontSize: 18,
    marginBottom: 2.5,
  },
  submitbutton: {
    backgroundColor: '#cccccc',
    alignSelf: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
  },
  textSubmit: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
  },
});
