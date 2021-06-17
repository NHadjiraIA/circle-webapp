import React, { useEffect, useState } from "react"; 
import { useHistory, useLocation } from "react-router-dom";
import { getNextQuestion, getQuestion, getPreviousQuestion} from "services";
import {Question} from "components/Question"
// import { Radio } from "components/RadioComponent";
import '../styles/materialize.css';
import '../styles/materialize.min.css';
import '../styles/body.css';
import {NEXT_QUESTION, REPORT, START} from 'navigation/CONSTANTS' 
import { report } from "pages/Report";


 
export const NextQuestion = () => {
  const history = useHistory();
  const location = useLocation();
  const questionId = location?.state?.question; 
  const fieldName = location?.state?.fieldName;
  const fieldId = location?.state?.field;
  console.log(questionId);


  const goToStart = () => {
    history.push({
      pathname: START
       
    });  
    console.log('this is go to');
  }
  const goToReport = () => {
    history.push({
      pathname: REPORT,
      state: { 
        title: fieldName,
        message1: selectedResponseChoiceId
        // chosenAnswer: null
      }
    });  
    console.log('this is go to');
  }
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [responseChoices, setResponseChoices] = useState(null);
  const[selectedResponseChoiceId, setSelectedResponseChoiceId] = useState();
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [nextButtonTitle, setNextButtonTitle] = useState('Next');
  const [previousButtonTitle, setPreviousButtonTitle] = useState('Start');
  const [showLastMessageSurvey, setshowLastMessageSurvey] = useState(false);
   
  // handel the radio button
  const selectChangedHandler = event => {
    setSelectedResponseChoiceId(event.target.value);
    console.log(setCurrentQuestion);
  }
  // display the next question according to the choice of the previous question 
  const goToNextQuestion = (event) => {
    if(!isLastQuestion){
      try {
        //do db call or API endpoint axios call here and return the promise.
        getNextQuestionRequest(currentQuestion.id, selectedResponseChoiceId, fieldId);
      }catch (error) {
        console.error("Erro while retrieving the next question", error);
      }
    }else{
      // if it is the last question display a thank you message
      goToReport();
    }
  }
  const getNextQuestionRequest = (id, selectedResponseChoiceId, fieldId) => {
      try{
         
           getNextQuestion(id, selectedResponseChoiceId, fieldId)
            .then((res)=>{
              if(res == null){
                //handle the end of the survey
                setIsLastQuestion(true);
                setNextButtonTitle('Report');
                //setCurrentQuestion(null);
                setResponseChoices(null);
                setPreviousButtonTitle('Previous'); 
                setshowLastMessageSurvey(true);
                 
              }
              setCurrentQuestion(res);  
              setResponseChoices(res.responseChoices);
              setPreviousButtonTitle('Previous'); 
             
            }).catch((err) => {
              console.log("getNextQuestion > err=", err);
              setCurrentQuestion([]); 
            });
          }catch(error){
        console.error("signin error!==", error);
      }
  } 
  //display the previous  question according to the current question
  const  goToPreviousQuestion = (event) => {
    if(!isFirstQuestion){
      try {
        //do db call or API endpoint axios call here and return the promise. 
        getPreviousQuestionRequest(currentQuestion.id,fieldId);
      }catch (error) {
        console.error("Erro while retrieving the next question", error);
      }
    }else{ 
           
      goToStart();
    }
  } 
  const getPreviousQuestionRequest = (id,fieldId) => {
    try{
       
         getPreviousQuestion(id, fieldId)
          .then((res)=>{
            console.log(res);
             if(res == null){
                //handle the beginning  of the survey
                setIsFirstQuestion(true);
                setPreviousButtonTitle('Start');  
                goToStart(); 
              }
              setCurrentQuestion(res);  
              setResponseChoices(res.responseChoices);
              setIsFirstQuestion(false);
            }).catch((err) => {
              console.log("getNextQuestion > err=", err);
              setCurrentQuestion([]); 
            });
        }catch(error){
      console.error("signin error!==", error);
    }
} 
  useEffect(() => {
      console.log("SS:: listChoices called ");
      return new Promise((resolve, reject) => {
            getQuestion(questionId)
            .then((res) => {
              setCurrentQuestion(res); 
              setResponseChoices(res.responseChoices);
              setIsFirstQuestion(false); 
                        
              resolve(res);
            })
            .catch((err) => {
              console.log("getChoices > err=", err);
              setCurrentQuestion([]); 
              reject("Request error!");
            });
            })
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
              {/* <form > */}
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
                      <div>
                        <label>
                           {showLastMessageSurvey ? 'Thank you for your responses please clic on "Report" to generate your report' : ' '}
                        </label>    
                         
                      </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col s6">
                      <button className="btn waves-effect waves-light green"  name="prev_button" onClick={()=>goToPreviousQuestion()}>{previousButtonTitle}
                        <i className="material-icons left">navigate_before</i>
                      </button>
                    </div>
                    <div className="col s6">
                      <button className="btn waves-effect waves-light green right" name="next_button" onClick={()=>goToNextQuestion()}>{nextButtonTitle}
                        {/* <i className="material-icons right">navigate_next</i> */}
                      </button>
                      {/* <div className="col s6">
                      <button className="btn waves-effect waves-light green right"  name="report_button" onClick={()=>goToReport()}>{nextButtonTitle}
                        
                      </button>
                      </div> */}
                   
                    </div>
                  </div>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>

    </>
    );
  }
export default NextQuestion;