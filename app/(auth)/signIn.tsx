import { View, Text, Button, TextInput } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { styles } from "./auth.styles";
const signin = () => {
  const router = useRouter();

  return (
    <>
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
          <Button
            title={"Sign In"}
            // onPress={handleAuthentication}
            color="#3498db"
          />
        </View>

        <View style={styles.bottomContainer}>
          <Text
            style={styles.toggleText}
            // onPress={() => setIsLogin(!isLogin)}
          >
            {"Need an account? Sign Up"}
          </Text>
        </View>
      </View>
    </>
    // <View>
    //   <Text>signin</Text>
    //   <Button title="signup" onPress={() =>router.navigate('signup')}/>
    // </View>
  );
};

export default signin;
