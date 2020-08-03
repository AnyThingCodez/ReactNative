import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo";

//const KEY = Expo.Constants.manifest.extra.mysecret;

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        this.setState({
          error: "Error Retrieving Weather Conditions",
        });
      }
    );
  }

  fetchWeather(lat, lon) {
    fetch(
      "api.openweathermap.org/data/2.5/weather?q=London,Nigeria&APPID=b23b4a3078463979c9c131b2d72e8460"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          temperature: data.main.temp,
          weatherCondition: data.main.weather[0].main,
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Fetching The Weather</Text>
        ) : (
          <View>
            <Text>Minimallist Weather App</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
