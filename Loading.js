import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the zivi weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6aa",
    paddingHorizontal: 20,
    paddingVertical: 100,
    justifyContent: "flex-end",
  },

  text: {
    fontSize: 30,
    color: "#2c2c2c",
  },
});
