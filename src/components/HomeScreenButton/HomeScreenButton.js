import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeScreenButton = props => {
  const { data, index } = props;

  const styles = {
    backgroundColor: "#ecf0f1",
    width: "50%",
    height: "50%",
    shadowColor: "red",
    shadowOpacity: 0.4,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 6
  };

  if (index % 2 === 1) {
    Object.assign(styles, { justifyContent: "flex-end" });
  } else {
    Object.assign(styles, { justifyContent: "flex-start" });
  }

  return (
    <TouchableOpacity style={styles}>
      {index % 2 === 0 ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name={`${data.icon}`} size={32} />
          <Text>{data.title}</Text>
        </View>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{data.title}</Text>

          <MaterialIcons name={`${data.icon}`} size={32} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default HomeScreenButton;
