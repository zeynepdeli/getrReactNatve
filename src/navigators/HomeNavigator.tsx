import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import CardScreen from "../screens/CardScreen";
import { connect } from "react-redux";
import { Product } from "../models";
import * as actions from "../redux/actions/cardActions";
const { width, height } = Dimensions.get("window");
const Stack = createStackNavigator();
const MyStack = ({
  navigation,
  route,
  cardItems,
  clearCart,
}: {
  cardItems: { product: Product; quantity: number }[];
  clearCart: () => void;
}) => {
  const tabHiddenRoutes = ["ProductDetails", "CardScreen"];
  const [totalPrice, setTotalPrice] = useState<number>(0);
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

  const getProductsPrice = () => {
    var total = 0;
    cardItems.forEach((cardItem) => {
      const price = (total += cardItem.product.fiyat);
      setTotalPrice(price);
    });
  };
  useEffect(() => {
    getProductsPrice();
  }, [cardItems, navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#5C3EBC",
          },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{
                width: 70,
                height: 30,
                marginLeft: 150,
                marginTop: 3,
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "white" }}>
              Urunler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CardScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: "white" }}
              ></View>
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: "#F3EFFE",
                  borderRadius: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 12 }}
                >
                  <Text> {"\u20BA"}</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 12 }}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Urun Detayi
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Ionicons name="heart" size={25} color="#32177a" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CardScreen"
        component={CardScreen}
        options={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerBackTitleVisible: false,
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 10 }}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => clearCart()}
              style={{ paddingRight: 10 }}
            >
              <Ionicons name="trash" size={25} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  const { cardItems } = state;
  return {
    cardItems: cardItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};
function HomeNavigator({
  navigation,
  route,
  cardItems,
  clearCart,
}: {
  clearCart: () => void;
}) {
  return (
    <MyStack
      navigation={navigation}
      route={route}
      cardItems={cardItems}
      clearCart={clearCart}
    />
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
