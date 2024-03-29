import { StyleSheet, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CategoryFiltering from "../../components/CategoryFiltering";
import TypeFiltering from "../../components/TypeFiltering";
import Category from "../../models";
import PrductContainer from "../../components/ProductContainer";
const index = (props) => {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />

      <PrductContainer />
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
