// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_QUESTION_ANSWERED } from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
var id_question = '';
var id_chosen_answer = '';
export const getResponseOfQuestionToUpdate = (id_user, id_question, survery_answer_code) => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      .get(GET_QUESTION_ANSWERED(id_user, id_question, survery_answer_code))
      .then((res) => {
        console.log(res);
        console.log("getQuestionAnswered > axios res=", res);
        resolve(res.data);
        console.log(res.data[0])
      })
      .catch((err) => {
        console.log("getQuestionAnsweredBefore > axios err=", err);
        reject("Error in getQuestionAnsweredBefore axios!");
      });
    } catch (error) {
      console.error("in questionsService > getChoicesOfQuestion, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

 
