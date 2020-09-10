import React, { useState, useContext } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { Context as quizContext } from "../context/quizContext";

const QuestionScreen = ({ navigation, input }) => {
  const [checked, setChecked] = useState("");
  const [answer, setAnswer] = useState("fail");
  const [callFunction, setCallFunction] = useState(false);
  const { calculateMarks, state, finalMarks } = useContext(quizContext);

  const checkAnswer = () => {
    if (checked.localeCompare(input.answer) == 0) setAnswer("pass");
    else setAnswer("fail");
    setCallFunction(true);
  };

  if (callFunction) {
    state.counter != 5
      ? calculateMarks({ answer }, () => navigation.navigate("quiz"))
      : finalMarks({ answer }, () => navigation.navigate("result"));
    setCallFunction(false);
  }

  return (
    <View style={{ flex: 1, borderRadius: 2, margin: 10 }}>
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          borderWidth: 1,
          marginTop: 50,
        }}
      >
        <View>
          <Text style={{ fontSize: 22 }}>Question : {input.question}</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="A"
            status={checked === "A" ? "checked" : "unchecked"}
            onPress={() => setChecked("A")}
          />
          <Text>{input.A}</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="B"
            status={checked === "B" ? "checked" : "unchecked"}
            onPress={() => setChecked("B")}
          />
          <Text>{input.B}</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="C"
            status={checked === "C" ? "checked" : "unchecked"}
            onPress={() => setChecked("C")}
          />
          <Text>{input.C}</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="D"
            status={checked === "D" ? "checked" : "unchecked"}
            onPress={() => setChecked("D")}
          />
          <Text>{input.D}</Text>
        </View>
        {/* button for next and submit  */}

        {state.counter == 5 ? (
          <View style={{ margin: 10 }}>
            <Button
              title="Submit"
              onPress={() => {
                checkAnswer();
              }}
            />
          </View>
        ) : (
          <View style={{ margin: 10 }}>
            <Button
              title="Next"
              onPress={() => {
                checkAnswer();
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: { flexDirection: "row", alignItems: "center" },
});

export default QuestionScreen;
