import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';

class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    )
  }
}

App.propTypes = {}

export default App;