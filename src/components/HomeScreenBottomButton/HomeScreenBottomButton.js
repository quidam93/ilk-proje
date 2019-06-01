import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";



const HomeScreenBottomButton = props => {
  const { data, index } = props;
  const buttonStyles = {
    backgroundColor: "black",
    width: "33.333333%",
    height: "33.333333%",
    shadowColor: "grey",
    shadowOpacity: 0.4,
    alignItems: "center",
    justifyContent:"space-around",

  };

  const iconStyle = {
    color:"#53c4c9",
    shadowColor:"grey",
    shadowOpacity:0.1,
  }
  return (
    <TouchableOpacity style={buttonStyles}>
        <View>
        <MaterialIcons name={`${data.icon}`} size={48} style={iconStyle} />
      <Text style={{color:"white"}}>{data.title}</Text>
        </View>
      
    </TouchableOpacity>
  );
};

export default HomeScreenBottomButton;
