import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

export default function Shoes({ img, costs, children, onClick }) {

  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc;
    } 
    return `${desc.substring(0, 15)}...`
  }

  return (
    <TouchableOpacity style={styles.container} onPress={ onClick }>
      <Image source={img} style={styles.shoesImg} />
      <Text style={styles.shoesText}>
        {filterDesc(children)}
      </Text>
      <View opacity={0.4}>
        <Text style={styles.shoesText}>
          {costs}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  shoesText: {
    fontSize: 16
  }
});
