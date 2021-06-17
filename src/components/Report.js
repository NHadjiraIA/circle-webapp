import React from 'react'
import { useHistory, useLocation } from "react-router-dom";
//import PropTypes from 'prop-types'
//import { LanguageSelection } from './components/LanguageSelection'
import {Typography, Button} from '@material-ui/core'
import {START , ROOT} from 'navigation/CONSTANTS' 
import {REPORT} from 'navigation/CONSTANTS' 
 

export const Report = () => {
  const history = useHistory();
  const location = useLocation();
  const fieldNameSelected = location?.state?.title;
  const contentReport = location?.state?.message1;

  const goTo = () =>   {  
    history.push({
      pathname: REPORT,
      state: { 
        
        // chosenAnswer: null
      }
    });  
    
    console.log('this is go to');
}
     
 
    return (
        <div>
        
        <div styles="width: 100%; height: 100%; position: absolute;">
      <div className="valign" styles="width: 100%;">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title green-text center">{fieldNameSelected}</span>
                  <div className="row">
                    <span className="black-text">
                      <p>The survey measures the environmental practices and behaviours of Canadian companies that relate to the condition of our air, water and soils. The survey is also designed to collect data to develop and improve three key environmental indicators: air quality, water quality and greenhouse gas emissions.
                      </p><br></br>
                      <p>{contentReport}</p>
                      <p>The objective of the survey is to provide context to scientific measures of air and water quality, and greenhouse gas emissions, by gaining a better understanding of household behaviour and practices with respect to the environment.</p>
                    </span>
                  </div>
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
