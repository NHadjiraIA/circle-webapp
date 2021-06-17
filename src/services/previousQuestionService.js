// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_PREVIOUS_QUESTION } from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
var id_question = '';
var id_chosen_answer = '';
export const getPreviousQuestion = (id_question,id_field) => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      .get(GET_PREVIOUS_QUESTION(id_question,id_field))
      .then((res) => {
        console.log(res);
        console.log("getChoicesOfPreviousQuestion > axios res=", res);
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

 
