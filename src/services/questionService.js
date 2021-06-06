// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_QUESTIONS, GET_ONE_QUESTION } from "./CONSTANTS";



/**
 * Function to fetch all questions.
 */
export const getQuestion = (id_question) => {
  
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
      .get(GET_ONE_QUESTION(id_question))

      .then((res) => {
        console.log("getAllQuestions > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("getAllQuestions > axios err=", err);
        reject("Error in getAllQuestions axios!");
      });
    } catch (error) {
      console.error("in questionService > getAllQuestions, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};



 

 
