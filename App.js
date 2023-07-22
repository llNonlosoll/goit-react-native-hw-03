import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";

import { LoginScreen } from "./screens/LoginScreen";
import { RegistrationScreen } from "./screens/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <LoginScreen />
        {/* <RegistrationScreen /> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
  },
});
