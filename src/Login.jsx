import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { signIn } from "../auth/Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    signIn(email, password, navigation);
    setEmail("");
    setPassword("");
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.viewStyle}>
      <Image source={require("../img/bus_pic.jpg")} style={styles.imagePic} />

      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.textInputStyle}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#3498db", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
  },
  resetButton: {
    backgroundColor: "#e74c3c", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  imagePic: {
    width: 200,
    height: 200,
    margin: 30,
    borderRadius:30,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    width: 300,
    marginBottom: 10,
    fontSize: 16,
  },
});
