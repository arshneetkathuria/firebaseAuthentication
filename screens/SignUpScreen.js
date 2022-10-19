import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../store/auth-context";
import { useContext } from "react";
import { createUser } from "../util/auth";
function SignUpScreen() {
  const authCtx = useContext(AuthContext);

  function signUpHandler({ email, password }) {
    try {
      const token = createUser({ email, password });
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log in the user,check your credentials"
      );
    }
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}
export default SignUpScreen;
