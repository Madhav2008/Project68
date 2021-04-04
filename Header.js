import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View>
      <TouchableOpacity style={styles.header}>
      <Text style={styles.text}>Buzz App</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
  },
  text: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  }
})