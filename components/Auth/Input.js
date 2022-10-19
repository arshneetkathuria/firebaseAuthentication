import { View, TextInput, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";
function Input({
  label,
  secure,
  isInvalid,
  onUpdatedValue,
  value,
  keyboardType,
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        value={value}
        onChangeText={onUpdatedValue}
      ></TextInput>
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    color: "white",
    marginBottom: 4,
  },
  input: {
    height: 50,
    borderRadius: 5,
    width: "100%",
    backgroundColor: Colors.primary100,
    padding: 12,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
