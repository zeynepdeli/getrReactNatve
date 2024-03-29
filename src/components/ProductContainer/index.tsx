import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "../ProductItem";
import productsGetir from "../../../assets/productsGetir";
productsGetir;
const index = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          paddingTop: 3,
        }}
      >
        {productsGetir.slice(0, 3).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={{ color: "gray", fontWeight: "bold", padding: 14 }}>
        Cubuk
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          backgroundColor: "white",
          paddingVertical: 10,
          alignItems: "center",
        }}
      >
        {productsGetir.slice(3).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
