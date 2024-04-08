// React Libraries and Things
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Landing
import LoginForm from './Components/Auth/LoginForm/LoginForm.jsx'
import About from './Components/About.jsx';
import RegistrationForm from './Components/Auth/RegistrationForm/RegistrationForm.jsx';
import PasswordResetForm from './Components/Auth/LoginForm/PasswordResetForm.jsx';

// Pages
import Home from './pages/Home.jsx';
import Type from './pages/CheckHealth';
import Appointment from './pages/CalendarAppointment';
import FillUpAppointment from './pages/FillUpAppointment';
import Articles  from './pages/Articles';
import Dashboard from './Components/Admin/DashboardAdmin'
import PregnancyWheel from './pages/PregnancyWheel.jsx';
import Chatbot from './pages/Chatbot.jsx';


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

      <Route path="/Home" compontent={ Home } exact>
        <Home/>
      </Route>

      <Route path="/type" compontent={ Type } exact> 
        <Type/>
      </Route>

      <Route path='/Appointment' compontent={ Appointment } exact> 
        <Appointment/>
      </Route>
      <Route path='/FillUpAppointment' compontent={ FillUpAppointment } exact>
        <FillUpAppointment/>
      </Route>
      <Route path='/DashboardAdmin' compontent={ Dashboard } exact>
        <Dashboard/>
      </Route>
      
      <Route path='/Articles' compontent={ Articles } exact>
        <Articles />
      </Route>

      <Route path='/Resetyourpassword' compontent={ PasswordResetForm } exact>
        <PasswordResetForm/>
      </Route>

      <Route path='/PregnancyWheel' compontent={  PregnancyWheel } exact>
        <PregnancyWheel/>
      </Route>

      <Route path='/Chatbot' compontent = { Chatbot } exact>
        <Chatbot/>
      </Route>
      
    </Switch>
    </Router>
    
    <Router>
      <Switch>
        <Route path="/Dashboard" render={(props) => <Dashboard searchQuery={props.location.state?.searchQuery} />} />
      </Switch>
    </Router>


</>
)
}
export default App