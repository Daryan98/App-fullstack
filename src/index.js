import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import { Router } from 'react-router-dom';
import history from './history';

import GlobalStyles from './globalStyles';

export function forwordTo(location) {
  history.push(location);
}

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <Router history={history}>
        <App />
    </Router>
  </React.Fragment>
, document.getElementById('root'));
