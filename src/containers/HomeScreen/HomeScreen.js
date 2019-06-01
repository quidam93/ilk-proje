import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import HomeScreenCarousel from "../../components/HomeScreenCarousel";

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "red", flex: 1 }}>
        <View style={{ backgroundColor: "yellow", flex: 2 }}>
          <HomeScreenCarousel />
        </View>
        <View style={{ backgroundColor: "blue", flex: 1 }}>
          <Text>Denem</Text>
        </View>
        <View style={{ backgroundColor: "orange", flex: 3 }} />
      </View>
    );
  }
}
export default HomeScreen;
