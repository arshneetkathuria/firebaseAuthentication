import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import AuthForm from "./AuthForm";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [credentialsValid, setCredentialsValid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate("SignUpScreen");
    } else navigation.navigate("LoginScreen");
  }
  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const confirmEmailIsValid = email === confirmEmail;
    const confirmPasswordIsValid = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!confirmEmailIsValid || !confirmPasswordIsValid))
    ) {
      Alert.alert("Invalid Input", `Please check your credentials `);
      setCredentialsValid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmEmail: !emailIsValid && !confirmEmailIsValid,
        confirmPassword: !passwordIsValid && !passwordIsValid,
      });
      return;
    }

    onAuthenticate({ email, password });
  }
  return (
    <>
      {/* <Toast visible={visibleToast} message="Signed In Successfully" /> */}

      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <AuthForm
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialsInvalid={credentialsValid}
          />
          <TouchableOpacity onPress={switchAuthModeHandler}>
            <Text style={styles.user}>
              {isLogin ? "Create a new User" : "Already a user?"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default AuthContent;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, alignContent: "center" },
  container: {
    alignContent: "center",
    padding: 24,
    margin: 20,
    marginTop: 100,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
  },
  user: {
    marginTop: 25,
    textAlign: "center",
    color: Colors.primary100,
  },
});
