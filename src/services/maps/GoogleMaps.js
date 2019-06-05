import MapView from "react-native-maps";
import React, { Component } from "react";



export default class GoogleMaps extends Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 40.2240,
          longitude: 28.9153,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        
        showsUserLocation={true}
      />
    );
  }
}
