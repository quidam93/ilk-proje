import React from "react";
import { Image,View,Dimensions } from "react-native";

const dHeight=Dimensions.get("screen").height;
const imageHeight=dHeight/6.65;


const HomeScreenProfileImage = () => {
  return (
    <Image
      source={{ uri: "https://picsum.photos/id/179/600/400" }}
      style={{ width: imageHeight, height: imageHeight, position: "absolute",flexDirection:"row",alignContent:"center",borderRadius:imageHeight/2 }}
    />
  );
};

export default HomeScreenProfileImage;
