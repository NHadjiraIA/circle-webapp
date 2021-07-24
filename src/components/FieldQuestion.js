import React, { useEffect, useState } from "react"; 
import { useHistory ,useLocation} from "react-router-dom";
import { getFields } from "services";
import {Question} from "components/Question"
import {NEXT_QUESTION} from 'navigation/CONSTANTS'
import {LOGIN} from 'navigation/CONSTANTS'  
// import { Radio } from "components/RadioComponent";
import '../styles/materialize.css';
import '../styles/materialize.min.css';
import '../styles/body.css';

export const FieldQuestion = () => {
  const history = useHistory();
  const location = useLocation();
  const email = location?.state?.email;
  const userId = location?.state?.userId;
  const userFirstName = location?.state?.userFirstName;
  const userLastName = location?.state?.userLastName;
  
  const goTo = () =>   {  
    history.push({
      pathname: NEXT_QUESTION,
      state: { 
        question: firstFieldQuestion,
        field: selectedFieldId,
        fieldName: selectedFieldName,
        userId : userId,
        email: email,
        userFirstName: userFirstName,
        userLastName: userLastName
      }
    });  
    console.log(firstFieldQuestion);
    console.log('this is go to');
}
const questionFunc = (path) => {
  history.push({
    pathname:  LOGIN,
    state: { 
      question: firstFieldQuestion,
      field: selectedFieldId,
      fieldName: selectedFieldName
      // chosenAnswer: null
    }
  });  
  console.log(firstFieldQuestion);
  console.log('this is go to');
}
    const [fields, setfields] = useState(null);
    const [firstFieldQuestion, setFirstFieldQuestion] = useState(null);
    const[selectedFieldId, setSelectedFieldId] = useState();
    const [selectedFieldName, setselectedFieldName] = useState(null);

    const nextQuestionFunction = (event) => {
      event.preventDefault();
      console.log(selectedFieldId)
      history.push('/nextquestion', {selectedFieldId});
    }
     
    const selectChangedHandler = event => {
      setSelectedFieldId(event.target.value);    
      var selectedField = fields.find(f => f.id_field == event.target.value);
      setFirstFieldQuestion(selectedField.id_question);
      setSelectedFieldId(selectedField.id_field);
      setselectedFieldName(selectedField.name_field);
    }
 
    useEffect(() => {
        console.log("SS:: listFields called ");
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getFields()
            .then((res) => {
              setfields(res);
              resolve(res);
            })
              .catch((err) => {
                console.log("getFields > err=", err);
                setfields([]); 
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
                  <h4 className="card-title green-text">logged in As : {email}</h4>
                    <span className="card-title green-text">Please choose your industry from below</span>
                    <div className="row">
                      <div className="col s12">
                     </div>
                    </div>
                 
                    {fields &&
                      fields.map((field) => {
                        return (
                          <div  >   
                            <label>
                            <input
                                type="radio" 
                                value={field.id_field}
                                checked={selectedFieldId == field.id_field}
                                onChange={selectChangedHandler}/>
                              <span>{field.name_field}</span>
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
                      <button className="btn waves-effect waves-light green right" type="submit" name="next_button" onClick={()=>goTo()}>Next
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
export default FieldQuestion;