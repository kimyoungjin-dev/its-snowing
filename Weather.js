import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const weatherOptions = {
  Snow: {
    iconName: "snowflake-variant",
    gradient: ["#F0F2F0", "#000C40"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#141E30", "#243B55"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#1e130c", "#9a8478"],
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#1f4037", "#99f2c8"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#0f0c29", "#e4e4d9"],
  },

  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#2193b0", "#6dd5ed"],
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Haze: {
    iconName: "car-light-fog",
    gradient: ["#141E30", "#243B55"],
  },
  Dust: {
    iconName: "cloud-off-outline",
    gradient: ["#6A9113", "#e4e4d9"],
  },
};
const Weather = ({ temp, condition }) => {
  return (
    <LinearGradient
      colors={weatherOptions["Clear"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={80}
          color="white"
        />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
};
export default Weather;

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    // "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 50,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
