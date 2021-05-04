import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={{ margin: 15, flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{result.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <FlatList
          data={result.photos}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item }} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    marginVertical: 15,
  },
});

export default ResultsShowScreen;
