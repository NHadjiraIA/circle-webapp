// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_MESSAGE_REPORT } from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
var id_question = '';
var id_chosen_answer = '';
export const getMessageReport = (id_field,id_user) => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios 
      .get(GET_MESSAGE_REPORT(id_user,id_field))
      .then((res) => {
        console.log("getMessageReport > axios res=", res);
        resolve(res.data);
        console.log(res.data[0])
      })
      .catch((err) => {
        console.log("getMessageReport > axios err=", err);
        reject("Error in getMessageReport axios!");
      });
    } catch (error) {
      console.error("in messageReportService > getMessageReport, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};

 
