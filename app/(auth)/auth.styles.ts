import { StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

export const styles = StyleSheet.create({
  text: {
    fontFamily: "ShareTech-Regular",
    // Other styles
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.primary,
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
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
    fontSize: 24,
    fontFamily: fonts.Regular,
  },
  toggleText: {
    fontSize: 24,
    color: colors.gray,
    textAlign: "center",
  },
  linkText: {
    fontSize: 22,
    color: colors.accent,
    textAlign: "center",
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
});
