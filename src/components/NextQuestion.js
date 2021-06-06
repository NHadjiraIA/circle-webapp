import React, { useEffect, useState } from "react"; 
import { useHistory } from "react-router-dom";
import { getNextQuestion, getQuestion } from "services";
import {Question} from "components/Question"
// import { Radio } from "components/RadioComponent";
import '../styles/materialize.css';
import '../styles/materialize.min.css';
import '../styles/body.css';
import {NEXT_QUESTION} from 'navigation/CONSTANTS' 


 
export const NextQuestion = () => {
  const history = useHistory();
  const goTo = (path) => {
    history.push(NEXT_QUESTION);
}
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [responseChoices, setResponseChoices] = useState(null);
    const[selectedResponseChoiceId, setSelectedResponseChoiceId] = useState();

    const nextQuestionFunction = (event) => {
      event.preventDefault();
      console.log(selectedResponseChoiceId)
      history.push('/nextquestion', {selectedResponseChoiceId});
    }
     
    const selectChangedHandler = event => {
      setSelectedResponseChoiceId(event.target.value);
      console.log(setCurrentQuestion);
    }

    useEffect(() => {
        console.log("SS:: listChoices called ");
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getNextQuestion(8,24,2)
              .then((res) => {
                setCurrentQuestion(res);  
                console.log(res.responseChoices);
                setResponseChoices(res.responseChoices);
                resolve(res);
              })
              .catch((err) => {
                console.log("getChoices > err=", err);
                setCurrentQuestion([]); 
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
  <div className="container">
        <div className="row"></div>
      </div>
      <div className="valign-wrapper" styles="width: 100%; position: absolute;">
        <div className="container">
          <div className="row">
            <div className="col s12 m12">
              <form onSubmit={nextQuestionFunction}>
                <div className="card">
                  <div className="card-content">
                    <span className="card-title green-text">
                           <p> {currentQuestion?.title} </p>
                      </span>
                    <div className="row">
                      <div className="col s12">
                     </div>
                    </div>
                    {responseChoices &&
                     responseChoices.map((responseChoice) => {
                        return (
                          <div  >   
                          <label>
                          <input
                              type="radio" 
                              value={responseChoice.idResponseChoice}
                              checked={selectedResponseChoiceId == responseChoice.idResponseChoice}
                              onChange={selectChangedHandler}/>
                            <span>{responseChoice.title}</span>
                          </label>              
                        </div>);
                      })}
                
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col s6">
                      <button className="btn waves-effect waves-light green" type="submit" name="prev_button" disabled>Previous
                        <i className="material-icons left">navigate_before</i>
                      </button>
                    </div>
                    <div className="col s6">
                      <button className="btn waves-effect waves-light green right" type="submit" name="next_button" onClick={()=>goTo(NEXT_QUESTION)}>Next
                        <i className="material-icons right">navigate_next</i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
    );
  }
export default NextQuestion;