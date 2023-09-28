import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../img/bus_pic.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>Hoş Geldiniz!</Text>

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleRegister}
        style={[styles.button, styles.registerButton]}
      >
        <Text style={[styles.buttonText, styles.registerButtonText]}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:30,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "cornflowerblue",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  registerButton: {
    backgroundColor: "orange",
  },
  registerButtonText: {
    color: "black",
  },
});

export default Main;
