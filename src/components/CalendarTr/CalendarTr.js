import React, { Component } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Calendar } from "react-native-calendars";
import {LocaleConfig} from 'react-native-calendars';


LocaleConfig.locales['tr'] = {
  monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasın','Aralık'],
  monthNamesShort: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haz.','Tem.','Ağus.','Eylül','Ekim','Kasım','Ara.'],
  dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
  dayNamesShort: ['Pazar','Pzrt.','Salı','Çarş.','Perş.','Cuma','Cmrts.'],
};
LocaleConfig.defaultLocale = 'tr';


export default class CalendarTr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{
            [this.state.selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange"
            }
          }}
        />
      </ScrollView>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    height: "100%"
  },
  text: {
    textAlign: "center",
    borderColor: "#bbb",
    padding: 10,
    backgroundColor: "#eee"
  },
  container: {
    flex: 1,
    backgroundColor: "gray",
  }
});
