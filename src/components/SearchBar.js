import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.inputBar}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.inputInside}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBar: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 2,
    margin: 15,
    flexDirection: "row",
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputInside: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
