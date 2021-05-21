import React from 'react';
import '../styles/HeaderNav.css'
import '../styles/body.css'
import '../styles/materialize.css'
import '../styles/materialize.min.css'
import Logo from '../assets/images/logo.png';

export const HeaderNav = () => {
  const Logout = () => {    
  }
    return (
    <>
      <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link type="text/css" rel="stylesheet" href="../styles/materialize.css" media="screen,projection" ></link>
      <link type="text/css" rel="stylesheet" href="../styles/body.css" media="screen,projection" ></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>
    </head>
    <header>
      <div className="navbar-fixed">
          <nav className="green lighten-5">
             <div className="nav-wrapper">
                 <a href="#" className="brand-logo"><img src={Logo} width="190" height="65"/></a>
                 <ul id="nav-mobile" className="right hide-on-med-and-down">
                 <li><a className="waves-effect waves-light btn green" onClick={Logout}>Logout</a></li>
                 <li><a className="waves-effect waves-light btn green" href="#">Contact</a></li>
                  </ul>
              </div>
            </nav>
      </div>
    </header>
    </>
    );
  }
export default HeaderNav;