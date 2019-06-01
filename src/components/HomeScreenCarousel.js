import React from "react";
import { View, Image, ScrollView, Dimensions, StyleSheet } from "react-native";

import Carousel from 'react-native-banner-carousel';

const imageArray = [
  { id: "1", uri: "https://picsum.photos/id/179/600/400" },
  { id: "2", uri: "https://picsum.photos/id/143/600/400" }
];

const dWidth = Dimensions.get("window").width;

const HomeScreenCarousel = () => (
  <View style={styles.container}
  >
    <Carousel autoplay
      autoplayTimeout={5000}
      loop
      index={0}
      pageSize={dWidth}
    >
      {imageArray.map((item, i) => (
        <Image
          key={i}
          source={{ uri: `${item.uri}` }}
          style={{ width: dWidth, height: "100%" }}
        />
      ))}
    </Carousel>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center'
  },
});

export default HomeScreenCarousel;