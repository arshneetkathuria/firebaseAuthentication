import { View, StyleSheet } from "react-native";
import Input from "../Auth/Input";
import Button from "../UI/Button";
import { useState } from "react";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInavlid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputHandler(type, event) {
    switch (type) {
      case "email":
        setEnteredEmail(event);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(event);
        break;
      case "password":
        setEnteredPassword(event);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(event);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View>
      <Input
        label={"Email Address"}
        onUpdatedValue={updateInputHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
      />
      {!isLogin && (
        <Input
          label={"Confirm Email Address"}
          onUpdatedValue={updateInputHandler.bind(this, "confirmEmail")}
          value={enteredConfirmEmail}
          keyboardType="email-address"
          isInvalid={emailsDontMatch}
        />
      )}
      <Input
        label={"Password"}
        onUpdatedValue={updateInputHandler.bind(this, "password")}
        value={enteredPassword}
        isInvalid={passwordIsInavlid}
        secure
      />
      {!isLogin && (
        <Input
          label={"Confirm Password"}
          onUpdatedValue={updateInputHandler.bind(this, "confirmPassword")}
          value={enteredConfirmPassword}
          isInvalid={passwordsDontMatch}
          secure
        />
      )}
      <Button isLogin={isLogin} onSubmit={submitHandler} />
    </View>
  );
}
export default AuthForm;

const styles = StyleSheet.create({});
