 
import React, { useEffect, useState } from "react"; 
import { useHistory, useLocation } from "react-router-dom";
//import PropTypes from 'prop-types'
//import { LanguageSelection } from './components/LanguageSelection'
import {  getMessageReport} from "services";
import {Typography, Button} from '@material-ui/core'
import {START , ROOT} from 'navigation/CONSTANTS' 
import {REPORT} from 'navigation/CONSTANTS' 
import { report } from "pages/Report";
 

export const Report = () => {
  const history = useHistory();
  const location = useLocation();
  const fieldIdSelected = location?.state?.field;
  const fieldNameSelected = location?.state?.title;
  const userId = location?.state?.user;
  const contentReport = location?.state?.message1;
  const [reports, setReports] = useState(null);
  const [messageReport, setMessageReport] = useState(null);
  console.log(fieldIdSelected)

  const goTo = () =>   {  
    history.push({
      pathname: REPORT,
      state: { 
        
        // chosenAnswer: null
      }
    });  
    
    console.log('this is go to');
}
useEffect(() => {
  console.log("SS:: messageReportService called ");
  return new Promise((resolve, reject) => {
    try {
      // do db call or API endpoint axios call here and return the promise.
      getMessageReport(fieldIdSelected,userId)
      .then((res) => {
        setReports(res);
        setMessageReport(res.messageReport)
        resolve(res);
      })
        .catch((err) => {
          console.log("getReport > err=", err);
          setReports([]); 
          reject("Request error!");
        });
    } catch (error) {
      console.error("signin error!==", error);
      reject("signin error!");
    }
  });
}, []);
 
    return (
        <div>
        
        <div styles="width: 100%; height: 100%; position: absolute;">
      <div className="valign" styles="width: 100%;">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title green-text center">
                  <p> {fieldNameSelected} </p>
                   <p>{reports?.date}</p>
                  <p> {reports?.firstName} </p >
                  <p> {reports?.lastName} </p> 
                    </span>
                  <div className="row">
                    <span className="black-text">
                      <p>The survey </p><br></br>
                      
                      <p>this is the report</p>
                    </span>
                  </div>
                  {messageReport &&
                     messageReport.map((messageReportResponse) => {
                        return (
                          <div  >   
                         <label>
                           
                            <span>{messageReportResponse.message}</span>
                            <span></span>
                          </label>                
                        </div>);
                      })}
                  <div className="row center">
                    <Button className="waves-effect waves-light btn green"  onClick={()=>goTo(START)}>Start Survey
                      <i className="material-icons right">send</i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>          
    )
}



export default Report
