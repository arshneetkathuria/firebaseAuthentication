import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
function IconButton({ name, color, size, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    margin: 8,
  },
  pressed: {
    opacity: 0.7,
  },
});
