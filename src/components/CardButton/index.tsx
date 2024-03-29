import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cardActions";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

type cardButtonType = {
  addItemToCard: (a: Product) => void;
  item: Product;
};
const index = ({ item, addItemToCard }: cardButtonType) => {
  return (
    <TouchableOpacity
      onPress={() => addItemToCard(item)}
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        height: height * 0.11,
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#5D39C1",
          height: height * 0.06,
          width: "90%",
          marginHorizontal: "5%",
          borderRadius: 7,
          marginTop: -10,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCard: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(index);
