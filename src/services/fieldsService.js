// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_FIELDS } from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
export const getFields = () => {
  console.log("questionService > getFields called...");
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
      .get(GET_ALL_FIELDS())
      .then((res) => {
        console.log("getAllFields > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("getAllFields > axios err=", err);
        reject("Error in getAllFields axios!");
      });
    } catch (error) {
      console.error("in fieldsService > getAllFields, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};


