import React, { useEffect, useState } from "react";
import { getQuestion } from "services";
import {Question} from "components/Question"
import { Radio } from "components/RadioComponent";
 

export const OneQuestion = () => {
 
    const [question, setquestion] = useState(null);
    const [selected, setSelected] = useState("first");

    useEffect(() => {
        console.log("SS:: listQuestions called ");
        return new Promise((resolve, reject) => {
          try {
            
            // do db call or API endpoint axios call here and return the promise.
            getQuestions()
              .then((res) => {
                console.log("getQuestion called ", res);
                setquestion(res);  
                resolve(res);
              })
              .catch((err) => {
                console.log("getQuestions > err=", err);
                setquestion([]);
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
    {question &&
          question.map((question, index) => {
            const cleanedDate = new Date(question.released).toDateString();
            //const authors = question.authors.join(", ");
           
          
            return (
              
              <div className="question" key={index}>
                        <h1> this is a first question </h1>
                        
                            <Radio
                            value="first"
                            selected={selected}

                            text={ <h3>question {index + 1} </h3>,question.content_question}
                            onChange={setSelected}
                          />     
                 
                  <div className="details">
                 
                   </div>
                        
                 </div>
                    );
          })}
         
     
            </div>
    
    </>
    );
  }
export default OneQuestion;