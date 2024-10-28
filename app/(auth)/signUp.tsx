import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./auth.styles";
import { colors } from "../utils/colors";

const signup = () => {
  const router = useRouter();

  return (
    <>

<KeyboardAvoidingView
      style={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>{"Sign Up"}</Text>

        <TextInput
          style={styles.input}
          // value={email}
          // onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          // value={password}
          // onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonWrapper, { backgroundColor: colors.accent }]}
            onPress={() => router.navigate("/(auth)/signIn")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text
            style={styles.toggleText}
          >
            {"Need an account?"}
          </Text>
          <Text
            style={styles.linkText}
            onPress={() => router.navigate('/(auth)/signIn')}
          >
            {"Sign In"}
          </Text>
        </View>
      </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default signup;
