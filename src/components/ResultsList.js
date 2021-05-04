import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {results.length ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ResultsShow", { id: item.id })
                }
              >
                <ResultsDetail result={item} />
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Text style={styles.noResults}>Ups, nothing here</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  noResults: {
    color: "red",
    marginLeft: 15,
  },
});
export default withNavigation(ResultsList);
