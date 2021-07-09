import React,{useEffect, useState } from 'react';
import {useLocation,useHistory } from "react-router-dom";
import '../styles/materialize.css';
import '../styles/materialize.min.css';
import '../styles/body.css'; 
import '../styles/Login.css'; 
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Email } from '@material-ui/icons';
import {START, REGISTER} from 'navigation/CONSTANTS'
import { postLogin } from "services";


export const LoginQutionnaire = () =>  {
   const history = useHistory();
//   const location = useLocation();
 

 
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   function validateForm() {
//     //return email.length > 0 && password.length > 0;
//   }
//   state = {
//     inputValue: ''
//   };
//   function handleSubmit(event) {
//    // event.preventDefault();
//   }
//   updateInputValue(evt) {
//     this.setState({
//       inputValue: evt.target.value
//     });
//   }
//   const goToStartWithLogin = ()=>{
//     var requestDto = {
//       "email": 'bkh.hadjira@gmail.com',
//       "password": 'hadjira123'
      
//     };
//     postLogin(requestDto);
//     console.log('hadjira login');
//     goToStart()
//   }
//   const goToStart = () =>   {  
//     history.push({
//       pathname: START,
//       state: { 
//       //   email: requestDto.email,
//       //   password: requestDto.password
//       }
//     });  
    
//     console.log('this is go to');
// }

//   return (
//     <div className="Login"> 
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
    
//           {/* <Form.Control
//             // autoFocus
//               type="email"
//             // value={email}
//             // onChange={(e) => setEmail(e.target.value)}
//           /> */}
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//               type="password"
//              // value={password}
//             // onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" onClick={()=>goToStartWithLogin()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const history = useHistory();

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
      
     
        // chosenAnswer: null
    
      // chosenAnswer: null
    }
  });  
  console.log('this is go to start from login');
  }
 const goToStartWithLongin = ()=>{
  console.log('you are login')
  var requestDto = {
    "email": "hadjira@gmail.com",
    "password": "hadjira123"
    
};
  postLogin(requestDto);
  
  console.log(postLogin(requestDto))
 
  history.push({

    
    pathname: START,
    state: { 
      // title: fieldName,
      // user: state.id_user,
      // field : fieldId,
      // message1: selectedResponseChoiceId,
      // survery_answer_code:codeUserResponse,
      // firstQuestion : questionId
      
     
        // chosenAnswer: null
    
      // chosenAnswer: null
    }
  });  
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
                    <input placeholder="email" id="eamil" name= "email" type="text" class="validate" placeholder="Enter your email"   required />
                        {/* </div> */}
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input   id="password" type="password" class="validate" placeholder="Enter password" required />
                    </div>
                  </div>
                </div>
                
                {/* <div class="row center"> */}
                <a href="/CreateUser">Create an account</a>   
                <button type="submit" class="waves-effect waves-light btn green" onClick={()=>goToRegister()}>Register</button>               
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
