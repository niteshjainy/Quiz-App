import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Context as quizContext } from "../context/quizContext";
const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useContext(quizContext);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        marginBottom: 150,
        justifyContent: "center",
      }}
    >
      <TextInput
        style={styles.TextInput}
        value={username}
        placeholder="Enter your Full Name"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.TextInput}
        value={email}
        placeholder="Enter your Email Address"
        onChangeText={setEmail}
      />
      <Button
        title="Start Quiz"
        onPress={() =>
          user({ username, email }, () => navigation.navigate("quiz"))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 2,
  },
});

export default HomeScreen;
