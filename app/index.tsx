import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { colors } from "./utils/colors";
import { fonts } from "./utils/fonts";

import * as Font from "expo-font";

const index = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      // Replace 'your-font-family' with the actual font family name
      "ShareTech-Regular": require("./assets/fonts/ShareTech-Regular.ttf"),
    });
  };

  // Load fonts on app startup
  useEffect(() => {
    loadFonts();
  }, []);

  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/cover.png")}
          style={styles.logo}
        />
        <Image
          source={require("../assets/images/home.png")}
          style={styles.bannerImage}
        />
        <Text style={styles.title}>Park Easy Eswatini</Text>
        <Text style={styles.subTitle}>Park Easy, Stress Free.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonWrapper, { backgroundColor: colors.accent }]}
            onPress={() => router.navigate("/(auth)/signIn")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "ShareTech-Regular",
    // Other styles
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 30,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.Regular,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.primary,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: fonts.Regular,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: 60,
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.Regular,
  },
});

export default index;
