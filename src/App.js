// React Libraries and Things
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Landing
import LoginForm from './Components/Auth/LoginForm/LoginForm.jsx'
import './Components/Navbar/Navbar_LandingStyle.css'
import About from './Components/About.jsx';
import RegistrationForm from './Components/Auth/RegistrationForm/RegistrationForm.jsx';

// Pages
import Home from './pages/Home.jsx';
import Type from './pages/CheckHealth';
import Appointment from './pages/CalendarAppointment';
import SearchBar from './pages/FillUpAppointment';


const App = () => {
  return(
    
  <>
  <Router>
    
      {/* <Navbar/> */}

      <Switch>
      <Route path='/' compontent={LoginForm} exact>
        <LoginForm/>
      </Route>
      
      <Route path='/Login' compontent={LoginForm} exact>
        <LoginForm/>
      </Route>

      <Route path='/About' compontent={About} exact>
        <About />
      </Route>

      <Route path='/Register' compontent={RegistrationForm} exact>
        <RegistrationForm/>
      </Route>

      <Route path="/home" compontent={ Home } exact>
        <Home/>
      </Route>

      <Route path="/type" compontent={ Type } exact> 
        <Type/>
      </Route>

      <Route path='/Appointment' compontent={ Appointment } exact> 
        <Appointment/>
      </Route>

      <Route path='/SearchBar' compontent={ SearchBar } exact>
        <SearchBar/>
      </Route>
      
    </Switch>
    </Router>
    
</>
)
}
export default App