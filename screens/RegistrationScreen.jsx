import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={styles.formWrapper}>
        <View style={styles.userPhoto}>
          <TouchableOpacity style={styles.addPhoto}>
            <Text style={styles.addPhotoButton}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
          style={[styles.commonText, styles.input]}
          placeholder="Логін"
        ></TextInput>
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
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.commonText, styles.buttonText]}>
            Зареєстуватися
          </Text>
        </TouchableOpacity>
        <Text style={[styles.commonText, styles.loginLink]}>
          Вже є акаунт? Увійти
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  formWrapper: {
    width: "100%",

    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: "white",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  userPhoto: {
    width: 120,
    height: 120,

    position: "absolute",
    top: -60,
    left: "50%",

    backgroundColor: "#F6F6F6",

    borderRadius: 16,

    transform: [{ translateX: -50 }],
  },

  addPhoto: {
    position: "absolute",
    top: 81,
    right: -12.5,

    justifyContent: "center",
    alignItems: "center",

    width: 25,
    height: 25,

    borderColor: "#FF6C00",
    borderRadius: 12.5,
    borderWidth: 1,
  },

  addPhotoButton: {
    color: "#FF6C00",
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

  loginLink: {
    color: "#1B4371",
    textAlign: "center",
  },
});
