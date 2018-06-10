import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return <Text style={styles.textStyle}>Albums </Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
});

export default Header;
