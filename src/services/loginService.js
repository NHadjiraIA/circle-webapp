// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { POST_LOGIN_USER} from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
 
export const postLogin = (hadjira) => {
   console.log(hadjira);
  return new Promise((reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      
      .post(POST_LOGIN_USER(), hadjira)
      console.log(hadjira)
      .then(res => {
        console.log("int he post response");
      })
      .catch((err) => {
        console.log("postChoicesOfQuestion > axios err=", err);
        reject("Error in getChoicesOfQuestion axios!");
      });
    } catch (error) {
      console.error("in questionsService > getChoicesOfQuestion, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

 
