import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import HomeScreenCarousel from "../../components/HomeScreenCarousel";
import HomeScreenButton from "../../components/HomeScreenButton.js/HomeScreenButton";

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "red", flex: 1 }}>
        <View style={{ backgroundColor: "yellow", flex: 2 }}>
          <HomeScreenCarousel />
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <HomeScreenButton />
          <HomeScreenButton />
          <HomeScreenButton />
          <HomeScreenButton />
        </View>
        <View style={{ backgroundColor: "orange", flex: 3 }} />
      </View>
    );
  }
}
export default HomeScreen;
