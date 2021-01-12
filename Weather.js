import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const weatherOptions = {
  Snow: {
    iconName: "snowflake-variant",
    gradient: ["#F0F2F0", "#000C40"],
    title: "It snows a lot Today.",
    subtitle: "Make a snowman",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#141E30", "#243B55"],
    title: "There was a lot of fog, so check your front carefully",
    subtitle: "Pay special attention to driving",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#1e130c", "#9a8478"],
    title: "There is a lot of thunder. Don't go out if you can at home",
    subtitle: "There may be additional Rain.",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#1f4037", "#99f2c8"],
    title: "The drizzle is falling. Do not worry too much",
    subtitle: "There may be a Sudden heavy Rain. Be Careful",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#0f0c29", "#e4e4d9"],
    title: "It is raining. Stay at home if you can",
    subtitle: "When you go out, be sure to bring an umbrella and go out",
  },

  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#2193b0", "#6dd5ed"],
    title: "The weather is clear. Have a happy time today",
    subtitle: "How about going out and eating out today?",
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "The weather is sunny. Go out and see",
    subtitle: "Could you have a happy day?",
  },
  Haze: {
    iconName: "car-light-fog",
    gradient: ["#141E30", "#243B55"],
    title: "There was a little fog.",
    subtitle:
      "The fog may become severe, so please refrain from driving if possible.",
  },
  Dust: {
    iconName: "cloud-off-outline",
    gradient: ["#6A9113", "#e4e4d9"],
    title: "There was a lot of dust. Please wear a mask",
    subtitle: "Please refrain from going out as much as possible",
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
      <View style={{ ...styles.container, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  title: {
    color: "white",
    fontSize: 35,
    marginBottom: 25,
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 20,
    color: "white",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
