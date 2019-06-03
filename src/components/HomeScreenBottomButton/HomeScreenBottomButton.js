import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";




const HomeScreenBottomButton = props => {
  const { data, index, navigasyon } = props;
  const buttonStyles = {
    backgroundColor: "black",
    width: "33.333333%",
    height: "33.333333%",
    shadowColor: "grey",
    shadowOpacity: 0.4,
    alignItems: "center",
    justifyContent: "space-around",

  };

  const viewStyles = {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }



  const iconStyle = {
    color: "#53c4c9",
    shadowColor: "grey",
    shadowOpacity: 0.1,
  }
  const navigate = (path) => {
    navigasyon(path)
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={() => navigate(data.rPath)}>
      <View style={viewStyles}>
        <MaterialIcons name={`${data.icon}`} style={iconStyle} size={40} />
        <Text style={{ color: "white", paddingTop:8 }}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreenBottomButton;
