import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import QuestionScreen from "./QuestionScreen";
import { Context as quizContext } from "../context/quizContext";
const QuizScreen = ({ navigation }) => {
  const { state } = useContext(quizContext);
  const question = state.questionData;
  return (
    <View style={{ flex: 1, borderRadius: 2, margin: 10 }}>
      <View
        style={{
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text style={styles.textStyle}>Name : {state.username}</Text>
        <Text style={styles.textStyle}>Email : {state.email}</Text>
        <Text style={styles.textStyle}>Marks : {state.marks}/6</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <QuestionScreen navigation={navigation} input={question} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "darkred",
    marginHorizontal: 5,
    padding: 5,
    borderWidth: 1,
  },
});

export default QuizScreen;
