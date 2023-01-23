import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function SizeButton({ bgColor, color, children }) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor || "#fff" }]}>
      <Text style={[styles.text, { color: color || "#ddd" }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#e6e6e6",
    borderWidth: 3,
    marginHorizontal: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
