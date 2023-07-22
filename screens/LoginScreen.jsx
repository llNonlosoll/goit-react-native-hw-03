import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Увійти</Text>
        <TextInput
          style={[styles.commonText, styles.input]}
          placeholder="Адреса електронної пошти"
        ></TextInput>
        <View>
          <TextInput
            style={[styles.commonText, styles.input]}
            placeholder="Пароль"
            textContentType="password"
          />
          <TouchableOpacity style={styles.showPasswordButton}>
            <Text>Показати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.commonText, styles.buttonText]}>Увійти</Text>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <Text style={[styles.commonText, styles.signInText]}>
            Немає акаунту?{" "}
          </Text>
          <TouchableOpacity>
            <Text
              style={[styles.commonText, styles.signInText, styles.signInLink]}
            >
              Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  formWrapper: {
    width: "100%",

    paddingTop: 32,
    paddingBottom: 111,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: "white",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  title: {
    marginBottom: 33,

    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35.16,
  },

  commonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },

  input: {
    width: "100%",
    height: 50,

    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: "#F6F6F6",

    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },

  showPasswordButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },

  button: {
    marginTop: 27,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  signInContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  signInText: {
    color: "#1B4371",
    textAlign: "center",
  },

  signInLink: {
    textDecorationLine: "underline",
  },
});
