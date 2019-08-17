import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import SignIn from '../SigninPage';
import routes from '../../routes';

class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path={routes.Home} component={HomePage}/>
        <Route path={routes.SIGN_IN} component={SignIn}/>
      </Switch>
    )
  }
}

App.propTypes = {}

export default App;