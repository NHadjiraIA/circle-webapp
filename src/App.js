import React, {setState, useState } from "react";
// Handle console logs
import "utils/dropConsole";
// Styles
import "fontsource-roboto";
// ROUTER
import { BrowserRouter, NavLink } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
// MUI Theme
import { ThemeProvider, Button, createMuiTheme } from "@material-ui/core";
import { ThemeSwitch } from "components/ThemeSwitch";
import { dark, light } from "styles/muiTheme";
import "./App.css";
import { ProvideAuth } from "navigation/Auth/ProvideAuth";
import {HeaderNav} from "components/HeaderNav";
 
// Redux
import { Provider } from "react-redux";
import {store} from "redux/store";
import axios from 'axios';
 

function App() {
  

   
  

  

  const [darkState, setDarkState] = useState(false);
  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("theme=", darkState ? "dark" : "light");
  };

  return (
    <div>
      
   
        <HeaderNav/>
          
        <Provider store={store}>
            <ProvideAuth>
              <BrowserRouter>
                <RouterConfig />
              </BrowserRouter>
            </ProvideAuth>
        </Provider>
      </div>
  );
}
export default App;
