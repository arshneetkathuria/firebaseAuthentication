import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/styles";
function Button({ isLogin, onSubmit }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={onSubmit}>
      <View style={styles.button}>
        <Text style={styles.text}>{isLogin ? "Log In" : "Sign Up"}</Text>
      </View>
    </Pressable>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    height: 45,
    justifyContent: "center",
  },
  text: { color: "white", textAlign: "center", fontWeight: "bold" },
});
