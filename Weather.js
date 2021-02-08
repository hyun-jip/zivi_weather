import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconname: "weather-fog",
    gradient: ["#ffe259", "#ffa751"],
    title: "Haze",
    subtitle: "Watch out",
  },
  Thunderstorm: {
    iconname: "weather-lightning",
    gradient: ["#544a7d", "#ffd452"],
    title: "Thunderstorm",
    subtitle: "Don't go outside",
  },
  Drizzle: {
    iconname: "weather-rainy",
    gradient: ["#005AA7", "#FFFDE4"],
    title: "Drizzle",
    subtitle: "Humidity High",
  },
  Rain: {
    iconname: "weather-pouring",
    gradient: ["#00F260", "#0575E6"],
    title: "Rain",
    subtitle: "Eat buchimgea",
  },
  Snow: {
    iconname: "weather-snowy",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "Snow",
    subtitle: "NO!!!! I can't drive",
  },
  Atmosphere: {
    iconname: "weather-cloudy-arrow-right",
    gradient: ["#6D6027", "#D3CBB8"],
    title: "Atmosphere",
    subtitle: "What is Atmosphere?",
  },
  Clear: {
    iconname: "weather-sunny",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title: "Clear",
    subtitle: "How nice weather~!",
  },
  Clouds: {
    iconname: "weather-cloudy",
    gradient: ["#ffd89b", "#19547b"],
    title: "Clouds",
    subtitle: "So so",
  },
  Haze: {
    iconname: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Haze",
    subtitle: "Listen Haze's music",
  },
  Mist: {
    iconname: "weather-tornado",
    gradient: ["#808080", "#3fada8"],
    title: "Mist",
    subtitle: "Chock chock",
  },
  Dust: {
    iconname: "weather-hazy",
    gradient: ["2c3e50", "fd746c"],
    title: "Dust",
    subtitle: "Mask on",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconname}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.titleContainer }}>
        <View>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
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
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: { paddingHorizontal: 20 },

  title: {
    color: "white",
    fontSize: 54,
    marginBottom: 10,
    fontWeight: "300",
  },
  subtitle: { color: "white", fontSize: 24, fontWeight: "600" },
});
