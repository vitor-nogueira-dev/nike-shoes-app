import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import Shoes from "../../components/Shoes";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#cececf" }]}>-</Text>
          <Text style={[styles.text, { color: "#cececf" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/1.png")}
            costs="R$140,90"
            onClick={() => navigation.navigate('Details')}
          >
            Nike Air Max Dia
          </Shoes>
          <Shoes
            img={require("../../assets/2.png")}
            costs="R$280,90"
            onClick={() => navigation.navigate('Details')}
          >
            Nike Downshifter 10
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/3.png")}
            costs="R$560,90"
            onClick={() => alert("Clicou")}
          >
            Nike Squidward Tentacles
          </Shoes>
          <Shoes
            img={require("../../assets/4.png")}
            costs="R$220,00"
            onClick={() => alert("Clicou")}
          >
            Nike Epic React Flyknit 2
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/5.png")}
            costs="R$920,90"
            onClick={() => alert("Clicou")}
          >
            Nike Joyride Run Flyknit
          </Shoes>
          <Shoes
            img={require("../../assets/6.png")}
            costs="R$730,00"
            onClick={() => alert("Clicou")}
          >
            Nike Air Max
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    fontFamily: "Impact",
    fontSize: 23,
    marginHorizontal: "2%",
  },
  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
});
