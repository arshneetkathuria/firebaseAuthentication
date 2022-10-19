import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { useEffect, useContext } from "react";
import { AuthContext } from "../store/auth-context";
function WelcomeScreen() {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  );
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
