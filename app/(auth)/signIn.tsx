import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingViewBase,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { styles } from "./auth.styles";
import { colors } from "../utils/colors";

const signin = () => {
  const router = useRouter();

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.authContainer}>
          <Text style={styles.title}>{"Sign In"}</Text>

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
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.toggleText}>{"Need an account?"}</Text>
            <Text
              style={styles.linkText}
              onPress={() => router.navigate("/(auth)/signUp")}
            >
              {"Sign Up"}
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default signin;
