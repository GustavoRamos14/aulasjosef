import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text } from "react-native";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      // This is a default value...
      numberHolder: 1

    }
  }

  generateRandomNumber = () => {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    this.setState({ numberHolder: randomNumber })
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}>{this.state.numberHolder}</Text>

        <Button title="Generate Random Number" onPress={this.generateRandomNumber} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },  
});