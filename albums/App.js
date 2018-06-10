/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";

class App extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8"
  }
});

export default App;
