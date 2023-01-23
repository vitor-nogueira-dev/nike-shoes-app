import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Dot from "../../components/Dot";
import SizeButton from "../../components/SizeButton/index";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Nike Downshifter 10",
  });
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/detail.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View>
        <View>
          <Text style={styles.titlePrice}>R$280,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={styles.titleName}>Nike Downshifter 10</Text>
        </View>
      </View>
      <View style={styles.dotContainer}>
        <Dot color="#2379f4" />
        <Dot color="#fb6e53" />
        <Dot color="#ddd" />
        <Dot color="#000" />
      </View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SizeButton bgColor="#17181a" color="#fff">
            37
          </SizeButton>
          <SizeButton>38</SizeButton>
          <SizeButton>39</SizeButton>
          <SizeButton>40</SizeButton>
        </ScrollView>
      </View>

      <View style={styles.textContent}>
        <Text style={styles.textTitle}>Nike Downshifter 10</Text>
        <Text style={styles.textContent}>
          O tênis Nike Masculino Downshifter 10 traz amortecimento e suporte
          atualizados, para garantir uma corrida estável e confortável. Esse
          tênis de corrida é confeccionado em material respirável, cabedal em
          couro sintético.{" "}
        </Text>
        <Text style={styles.textList}>- Categoria: Amortecimento</Text>
        <Text style={styles.textList}>- Material: Mesh</Text>

        <Button />
        <View style={styles.line} />
        <Footer></Footer>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
  },

  titlePrice: {
    fontFamily: "Impact",
    fontSize: 24,
    paddingHorizontal: "2%",
  },
  titleName: {
    fontFamily: "Impact",
    fontSize: 30,
    paddingHorizontal: "2%",
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%",
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle: {
    fontSize: 25,
    marginVertical: "3%",
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#ddd",
    marginVertical: "2%",
  },
});
