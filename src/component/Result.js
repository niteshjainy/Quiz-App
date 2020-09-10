import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Context as quizContext } from "../context/quizContext";

const Result = ({ navigation }) => {
  const { state, resetApp } = useContext(quizContext);
  return (
    <View
      style={{
        flex: 1,
        margin: 10,
        borderWidth: 1,
        borderColor: "brown",
        borderRadius: 20,
        padding: 10,
      }}
    >
      <View>
        <Text style={styles.firstContainer}>
          Thanks for giving the test your details are below :-
        </Text>
        <View style={styles.secondContainer}>
          <Text style={styles.textStyle}>Total Marks</Text>
          <Text style={styles.subTextStyle}>
            Final Score is {state.marks} out of 6.
          </Text>
          <Text style={styles.textStyle}>Name </Text>
          <Text style={styles.subTextStyle}>{state.username}</Text>
          <Text style={styles.textStyle}>Email </Text>
          <Text style={styles.subTextStyle}>{state.email}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 40, padding: 10 }}>
        <Button
          title="Back to main screen"
          onPress={() => resetApp(() => navigation.navigate("home"))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    marginHorizontal: 5,
    color: "#6e548f",
  },
  firstContainer: {
    fontSize: 28,
    padding: 10,
    justifyContent: "center",
    color: "#f2a63a",
    marginTop: 10,
  },
  secondContainer: {
    fontSize: 28,
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 50,
  },
  subTextStyle: {
    fontSize: 20,
    marginHorizontal: 5,
    marginBottom: 20,
  },
});
export default Result;
