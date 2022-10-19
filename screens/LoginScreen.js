// import { ToastAndroid, View } from "react-native";
import { Alert } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { signIn } from "../util/auth";
import AuthContent from "../components/Auth/AuthContent";

function LoginScreen() {
  const authCtx = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    try {
      const token = await signIn({ email, password });
      authCtx.authenticate(token);
      setIsAuthenticating(!isAuthenticating);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Authentication failed",
        "Could not log in the user,check your credentials"
      );
    }
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}
export default LoginScreen;
