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
import PregnancyWheel from './Components/Admin/TabView/PregnancyWheel.jsx';
import Chatbot from './pages/Chatbot.jsx';
import PatientsRecord from './Components/Admin/PatientsRecord';
import UserProfile from './pages/UserProfile';
import OvulationTracker from './pages/OvulationTracker.jsx';
import Error404 from '../src/Components/Global/Error404.jsx';


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


      <Route path='/Articles' compontent={ Articles } exact>
        <Articles />
      </Route>

      <Route path='/Resetyourpassword' compontent={ PasswordResetForm } exact>
        <PasswordResetForm/>
      </Route>

      <Route path='/Chatbot' compontent = { Chatbot } exact>
        <Chatbot/>
      </Route>
      
      <Route path='/UserProfile' compontent = { UserProfile } exact>
        <UserProfile/>
      </Route>

      <Route path='/Appointment' compontent={ Appointment } exact> 
        <Appointment/>
      </Route>

      <Route path='/FillUpAppointment' compontent={ FillUpAppointment } exact>
        <FillUpAppointment/>
        
      </Route>

      <Route path='/OvulationTracker' compontent= { OvulationTracker } exact>
        <OvulationTracker/>
      </Route>

      <Route path='/PregnancyWheel' compontent= { PregnancyWheel } exact>
        <PregnancyWheel/>
      </Route>

      <Route path='/Dashboard' compontent= { Dashboard } exact>
        <Dashboard/>
      </Route>

      <Route path='/PatientsRecord' compontent= { PatientsRecord } exact>
        <PatientsRecord/>
      </Route>

      <Route component={Error404} />

      
    <Router>
      <Switch>

        <Route path="/Dashboard" render={(props) => <Dashboard searchQuery={props.location.state?.searchQuery} />} />
        <Route path="/PatientsRecord" component={ PatientsRecord } />
        {/* <Route path='/PregnancyWheel' compontent={  PregnancyWheel } /> */}
        
        <Route path='/PregnancyWheel' compontent={  PregnancyWheel } exact>
          <PregnancyWheel/>
        </Route>

      </Switch>
    </Router>
      

    </Switch>
    </Router>
    
</>
)
}
export default App