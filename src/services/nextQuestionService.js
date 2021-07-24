// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_NEXT_QUESTION, DELETE_NEXT_ANSWERS, PUT_USER_ANSWER} from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
var id_question = '';
var id_chosen_answer = '';

export const deleteNextAnswers = (userId, codeSurvery, questionId) => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      .get(DELETE_NEXT_ANSWERS(userId, codeSurvery, questionId))
      .then((res) => {
        console.log("deleteNextAnswers > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("deleteNextAnswers > axios err=", err);
        reject("Error in deleteNextAnswers axios!");
      });
    } catch (error) {
      console.error("in questionsService > deleteNextAnswers, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
}

export const putUserAnswer = (userId, codeSurvery, questionId, answerId) => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      .get(PUT_USER_ANSWER(userId, codeSurvery, questionId ,answerId))
      .then((res) => {
        console.log("putUserAnswer > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("putUserAnswer > axios err=", err);
        reject("Error in putUserAnswer axios!");
      });
    } catch (error) {
      console.error("in questionsService > putUserAnswer, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
}
export const getNextQuestion = (id_question,id_chosen_answer,id_field) => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      .get(GET_NEXT_QUESTION(id_question,id_chosen_answer,id_field))
      .then((res) => {
        console.log("getChoicesOfQuestion > axios res=", res);
        resolve(res.data);
        console.log(res.data[0])
      })
      .catch((err) => {
        console.log("getChoicesOfQuestion > axios err=", err);
        reject("Error in getChoicesOfQuestion axios!");
      });
    } catch (error) {
      console.error("in questionsService > getChoicesOfQuestion, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

 
