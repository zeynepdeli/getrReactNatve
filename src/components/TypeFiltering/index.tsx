import { StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.045,
          borderRadius: 6,
          marginRight: 12,
        },
        item == active
          ? { backgroundColor: "#5C3EBC" }
          : { borderColor: "#ced4da", borderWidth: 0.2 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#7849F7", fontWeight: "600" },
          item == active && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};
const { width, height } = Dimensions.get("window");
const index = () => {
  const [category, setCategory] = useState<string>("Birlikte Iyi Gider");
  return (
    <ScrollView
      style={{
        width: "100%",
        height: height * 0.072,
        flexDirection: "row",
        paddingVertical: height * 0.014,
        paddingLeft: 10,
        backgroundColor: "#fff",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte Iyi Gider", "Cubuk", "Kutu", "Külah", "Coklu", "Bar"].map(
        (item) => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        )
      )}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
