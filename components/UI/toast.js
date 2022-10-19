import { ToastAndroid } from "react-native";
function Toast({ visible, message }) {
  if (visible) {
    return ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }
  return null;
}
