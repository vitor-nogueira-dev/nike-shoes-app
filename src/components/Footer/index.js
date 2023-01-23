import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Shoes from "../Shoes";

export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/1.png")} costs="390,90">
              Nike Squidward Tentacles
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/6.png")} costs="R$730">
              Nike Air Max
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/5.png")} costs="R$920,90">
              Nike Joyride Run Flyknit
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Impact",
    marginVertical: "2%",
  },
});
