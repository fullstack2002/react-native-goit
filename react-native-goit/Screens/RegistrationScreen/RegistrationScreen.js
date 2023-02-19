import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default RegistrationScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Registration</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff"
  },
  title: {
    marginTop: 32,
    paddingVertical: 8,
    borderWidth: 4,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});