import React, { useEffect, useState } from "react";
import { getQuestion } from "services";
import {Question} from "components/Question"
import { Radio } from "components/RadioComponent";

export const Questions = () => { 
    const [questions, setquestions] = useState(null);
    const [selected, setSelected] = useState("first");
    useEffect(() => {
        console.log("SS:: listQuestions called ");
        return new Promise((resolve, reject) => {
          try {             
            // do db call or API endpoint axios call here and return the promise.
            getQuestion(2)
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
            return (              
              <div className="question" key={index}>
                        <h1> this is a first question </h1>
                         <p>{question.content_question}</p>
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