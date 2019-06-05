import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import HomeScreenCarousel from "../../components/HomeScreenCarousel";
import HomeScreenButton from "../../components/HomeScreenButton/HomeScreenButton";
import HomeScreenProfileImage from "../../components/HomeScreenProfileImage";
import HomeScreenBottomButton from "../../components/HomeScreenBottomButton/HomeScreenBottomButton";

const buttonData = [
  {
    icon: "date-range",
    title: "Takvim",
    rPath: "ContactScreen"
  },
  {
    icon: "date-range",
    title: "Takvim",
    rPath: "ContactScreen2"
  },
  {
    icon: "date-range",
    title: "Takvim",
    rPath: "ContactScreen3"
  },
  {
    icon: "location-on",
    title: "YOL TARİFİ",
    rPath: "GoogleMapsScreen"
  }
];

const bottomButtonData = [
  {
    icon: "filter-vintage",
    title: "GÜNCEL",
    rPath: "UpToDateScreen"
  },
  {
    icon: "location-city",
    title: "GÜMÜŞOVA",
    rPath: "GumusovaScreen"
  },
  {
    icon: "folder-open",
    title: "KURUMSAL",
    rPath: "CorporateScreen"
  },
  {
    icon: "import-contacts",
    title: "ANKET",
    rPath: "SurveyScreen"
  },
  {
    icon: "link",
    title: "NÖBETÇİ ECZANE",
    rPath: "PharmacyScreen"
  },
  {
    icon: "work",
    title: "PROJELER",
    rPath: "ProjectScreen"
  },
  {
    icon: "keyboard",
    title: "E-BELEDİYE",
    rPath: "GovermentScreen"
  },
  {
    icon: "camera-alt",
    title: "ÇEK&GÖNDER",
    rPath: "CameraScreen"
  },
  {
    icon: "border-color",
    title: "İSTEK&ŞİKAYET",
    rPath: "WishesScreen"
  },
];

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Ana Sayfa',
  }

  render() {

    const { navigate } = this.props.navigation;

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
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: 'center',
          }}
        >
          {buttonData.map((item, i) => (
            <HomeScreenButton key={i} data={item} index={i} navigasyon={navigate} />
          ))}
          <HomeScreenProfileImage />
        </View>
        <View
          style={{
            backgroundColor: "grey",
            flex: 3,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {bottomButtonData.map((item, i) => (
            <HomeScreenBottomButton key={i} data={item} index={i} navigasyon={navigate} />
          ))}
        </View>
      </View>
    );
  }
}
export default HomeScreen;
