import { View, Text, TextInput } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./auth.styles";

const signup = () => {
  const router = useRouter();

  return (
    <>
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
          <Button
            title={"Sign Up"}
            // onPress={handleAuthentication}
            color="#3498db"
          />
        </View>

        <View style={styles.bottomContainer}>
          <Text
            style={styles.toggleText}
            //  onPress={() => setIsLogin(!isLogin)}
          >
            {"Already have an account? Sign In"}
          </Text>
        </View>
      </View>
    </>
    // <View>
    //   <Text>signup</Text>
    //   <Button title='signin' onPress={() =>router.navigate('signin')}/>

    // </View>
  );
};

export default signup;
