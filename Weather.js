import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "ios-sunny",
    bgGrad: ["#fc4a1a", "#f7b733"],
    title: "Clear",
    subtitle: "Go outside!"
  },
  Thunderstorm: {
    iconName: "ios-thunderstorm",
    bgGrad: ["#5D4157", "#A8CABA"],
    title: "Thunderstorm outside",
    subtitle: "Keep being home"
  },
  Drizzle: {
    iconName: "md-rainy",
    bgGrad: ["#00416A", "#E4E5E6"],
    title: "Drizzle",
    subtitle: "Small raining, wait for a minute"
  },
  Rain: {
    iconName: "ios-rainy",
    bgGrad: ["#000046", "#1CB5E0"],
    title: "It's raining",
    subtitle: "drip- drip-"
  },
  Snow: {
    iconName: "md-snow",
    bgGrad: ["#C9D6FF", "#E2E2E2"],
    title: "It's snowing",
    subtitle: "Do you wanna build a snow man?"
  },
  Atmosphere: {
    iconName: "ios-cloud-outline",
    bgGrad: ["#2c3e50", "#bdc3c7"],
    title: "Atmosphere",
    subtitle: "I don't know. What is it?"
  },
  Clouds: {
    iconName: "ios-cloud",
    bgGrad: ["#4CA1AF", "#C4E0E5"],
    title: "Cloudy",
    subtitle: "Cloudy sky"
  },
  Haze: {
    iconName: "md-cloudy",
    bgGrad: ["#43C6AC", "#191654"],
    title: "Haze",
    subtitle: "Hazy~"
  },
  Dust: {
    iconName: "md-sad",
    bgGrad: ["#3B4371", "#F3904F"],
    title: "So dusty",
    subtitle: "Bring your mask"
  },
  Mist: {
    iconName: "md-cloudy",
    bgGrad: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "Misty",
    subtitle: "moisturizing!"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].bgGrad}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Ionicons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
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
    "Dust",
    "Mist"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
