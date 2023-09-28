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
import { createUser } from "../auth/Firebase";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigation, displayName);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.viewStyle}>
      <Image source={require("../img/bus_pic.jpg")} style={styles.imagePic} />

      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.textInputStyle}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={styles.textInputStyle}
      />
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

      <TouchableOpacity onPress={handleSubmit} style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#27ae60", 
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
