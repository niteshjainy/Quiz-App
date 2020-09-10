import createDataContext from "./createDataContext";
import * as data from "./../Data.json";

const quizReducer = (state, action) => {
  let count = state.counter;
  let totalQuestionForTest = 6;
  switch (action.type) {
    case "add_marks":
      count++;
      if (totalQuestionForTest != count) {
        if (action.payload == "pass") {
          return {
            ...state,
            marks: state.marks + 1,
            counter: count,
            questionData: data.questions[count],
          };
        } else {
          return {
            ...state,
            questionData: data.questions[count],
            counter: count,
          };
        }
      } else return { ...state };

    case "add_user":
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      };
    case "reset":
      return {
        ...state,
        marks: 0,
        questionData: data.questions[0],
        counter: 0,
        username: "",
        email: "",
      };
    default:
      return state;
  }
};

const calculateMarks = (dispatch) => ({ answer }, callback) => {
  dispatch({
    type: "add_marks",
    payload: answer,
  });
  if (callback) {
    callback();
  }
};

const user = (dispatch) => ({ username, email }, callback) => {
  dispatch({
    type: "add_user",
    payload: { username, email },
  });
  if (callback) callback();
};

const finalMarks = (dispatch) => ({ answer }, callback) => {
  dispatch({
    type: "add_marks",
    payload: answer,
  });
  if (callback) callback();
};

const resetApp = (dispatch) => (callback) => {
  dispatch({
    type: "reset",
  });
  if (callback) callback();
};

export const { Context, Provider } = createDataContext(
  quizReducer,
  { calculateMarks, finalMarks, user, resetApp },
  {
    marks: 0,
    questionData: data.questions[0],
    counter: 0,
    username: "",
    email: "",
  }
);
