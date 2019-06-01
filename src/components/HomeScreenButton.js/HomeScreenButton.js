import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const HomeScreenButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#ecf0f1",
        width: "50%",
        height: "50%",
        shadowColor: "red",
        shadowOpacity: 0.4,
        justifyContent: "center"
      }}
    >
      <Text>Deneme Button</Text>
    </TouchableOpacity>
  );
};

export default HomeScreenButton;
