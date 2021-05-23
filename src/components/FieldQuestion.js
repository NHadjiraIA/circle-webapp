import React, { useEffect, useState } from "react"; 
import { useHistory } from "react-router-dom";
import { getFields } from "services";
import {Question} from "components/Question"
// import { Radio } from "components/RadioComponent";
import '../styles/materialize.css';
import '../styles/materialize.min.css';
import '../styles/body.css';

export const FieldQuestion = () => {
  const history = useHistory();
    const [fields, setfields] = useState(null);
    const[selectedFieldId, setSelectedFieldId] = useState();

    const nextQuestionFunction = (event) => {
      event.preventDefault();
      console.log(selectedFieldId)
      history.push('/nextquestion', {selectedFieldId});
    }
     
    const selectChangedHandler = event => {
      setSelectedFieldId(event.target.value);
      console.log(fields);
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
                    {/* /* {props.industry.map(answer => 
                      <div className="row">
                        <div className="col s12">
                          <p>
                            <label>
                              <input className="with-gap" name="choice" value={answer.id} type="radio" onChange={(e) => setQuestionId(e.target.value)} />
                              <span>{answer.item}</span>
                            </label>
                          </p>
                        </div>
                      </div>
                  )} */} 
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
                      <button className="btn waves-effect waves-light green right" type="submit" name="next_button">Next
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