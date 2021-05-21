import React, { useEffect, useState } from "react";
import { getQuestions } from "services";
import {Question} from "components/Question"

export const Questions = () => {
     

    const [questions, setquestions] = useState(null);
   

    useEffect(() => {
        console.log("SS:: listQuestions called ");
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getQuestions()
              .then((res) => {
                console.log("getQuestions called ", res);
                setquestions(res);  
                resolve(res);
              })
              .catch((err) => {
                console.log("getQuestions > err=", err);
                setquestions([]);
                reject("Request error!");
              });
          } catch (error) {
            console.error("signin error!==", error);
            reject("signin error!");
          }
        });
      }, []);
    return (
    <>
  
<div className="questions">
    {questions &&
          questions.map((question, index) => {
            const cleanedDate = new Date(question.released).toDateString();
            //const authors = question.authors.join(", ");
           
          
            return (
              
              <div className="question" key={index}>
                        <h1> this is a first question </h1>
                        <h3>question {index + 1}</h3>
                        <h2>{question.content_question}</h2>
                  <div className="details">
                                 
                   
                   </div>
                        
                 </div>
                    );
          })}
            </div>
    
    </>
    );
  }
export default Questions;