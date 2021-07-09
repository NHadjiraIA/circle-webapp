// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { DELETE_MESSAGE_REPORT} from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
 
export const deleteMessageReport = (id_user, id_question, survery_answer_code) => {
  return new Promise((reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      
      .delete(DELETE_MESSAGE_REPORT(id_user, id_question, survery_answer_code))
      .then(res => {
        console.log("here delete response");
      })
      .catch((err) => {
        console.log("delete message report > axios err=", err);
        reject("Error in  deleteMessageReport axios!");
      });
    } catch (error) {
      console.error("in deleteMessageReportService > deleteMessageReport, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

 
