import React,{useEffect, useState } from 'react';
import {useLocation,useHistory } from "react-router-dom";
import '../styles/materialize.css';
import '../styles/materialize.min.css';
import '../styles/body.css'; 
import '../styles/Login.css'; 
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Email, MicNone } from '@material-ui/icons';
import {START, REGISTER,LOGIN, ROOT} from 'navigation/CONSTANTS'
import { postLogin, getUserDetails } from "services";



export const LoginQutionnaire = () =>  {
  const userInfo = {
    "id" : undefined,
    "firstName": undefined,
    "lastName": undefined
  }
   const history = useHistory();
//   const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  
  //const history = useHistory();
  const goToStarSurvey = () => {
  history.push({
    pathname: START,
    state: { 
       email: email,
       userId : userInfo.id,
       userFirstName: userInfo.firstName,
       userLastName: userInfo.lastName
    }
  }); 
  }
  const goToHomePage = () => {
    history.push({
      pathname: ROOT,
      state: { 
     
      }
    }); 
    }
  const handleEmailChange =(event) => {
    //setEmail(event.target.value)
  }

  const handlePasswordChange =(event) => {
    //setPassword(event.target.value)
  }

  const goToRegister = ()=>{
    console.log('you are login')
 
  history.push({
    
    pathname: REGISTER,
    state: { 
      // title: fieldName,
      // user: state.id_user,
      // field : fieldId,
      // message1: selectedResponseChoiceId,
      // survery_answer_code:codeUserResponse,
      // firstQuestion : questionId
    }
  });  
  console.log('this is go to start from login');
  }
 const goToStartWithLongin = ()=>{
  console.warn(email,password)
  var requestDto = {
       "email": email,
       "password": password 
     };
  let result = postLogin(requestDto)
  .then(result =>{
    console.log("The login operation response status code is :%s", result.status);
    if (result.data.message === "login succeded !"){
       console.log(result.data.message);
       setUserId(result.data.idUser);
       
      console.log("login with success");
      getUserDetails(email)
      .then((res)=>{
        console.log('returned user object is', res.data)
        userInfo.id = res.data.id_user;
        userInfo.firstName = res.data.first_name_user;
        userInfo.lastName = res.data.last_name_user;
        goToStarSurvey();
      });
    } else if (result.data.message !== "login succeded !"){
      console.log("error page");
      goToHomePage();
    }
  });
  console.log("this is the result of postlogin",result);
//
//   postLogin(requestDto);
  
//   console.log(postLogin(requestDto))
 
//   history.push({

    
//     pathname: START,
//     state: { 
//       // title: fieldName,
//       // user: state.id_user,
//       // field : fieldId,
//       // message1: selectedResponseChoiceId,
//       // survery_answer_code:codeUserResponse,
//       // firstQuestion : questionId
      
     
//         // chosenAnswer: null
    
//       // chosenAnswer: null
//     }
//   });  
  console.log('this is go to start from login');
   
 }
  const handleSubmit = (event) => {
     
  }

  const Register = (event) => {
   }
  return (
  
    <div class="container" style={{ textAlign: "center" }}>
      <div class="row">
      <div class="col s4"></div>
        <div class="col s4">
          {/* <form onSubmit={handleSubmit}> */}
            <div class="card">
              <div class="card-content">
                <span class="card-title green-text center">User Login</span>
                <div class="row">
                  <div class="input-field col s12">
                    <input placeholder="email" id="eamil" name= "email" type="text" 
                    onChange={(e)=>setEmail(e.target.value)}
                    class="validate" placeholder="Enter your email"   required />
                        {/* </div> */}
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input   id="password" type="password"
                       onChange={(e)=>setPassword(e.target.value)}
                      class="validate" placeholder="Enter password" required />
                    </div>
                  </div>
                </div>
                
                {/* <div class="row center"> */}
                <a href="/CreateUser">Create an account</a>    
                {/* <button type="submit" class="waves-effect waves-light btn green" onClick={()=>goToRegister()}>Register</button>                */}
                  <button type="submit" class="waves-effect waves-light btn green" onClick={()=>goToStartWithLongin()}>SignIn</button> 
                   
                {/* </div> */}
              </div>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
    
  )
}

export default LoginQutionnaire
