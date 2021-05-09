import React from 'react'
import Landing from './components/Landing'
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import SignIn from './pages/SignIn'
import PredictionForm from './pages/PredictionForm'
import MeasurementForm from './pages/MeasurementForm'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import ViewField from './pages/ViewField'
import CustomMeasurementForm from './components/CustomMeasurementForm'
import PostReqForm from './pages/PostReqForm'
import PutReqForm from './pages/PutReqForm'


const App = () => {

  return (
    <>

      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/sign-in' component={SignIn} /> 
          <Route path='/prediction' component={PredictionForm} /> 
          <Route path='/fp-form' component={PostReqForm} /> 
          <Route path='/fpu-form' component={PutReqForm} /> 
          <Route path='/sign-up' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/view-field' component={ViewField} />           
        </Switch>
      </Router>

    </>
  )
}

export default App