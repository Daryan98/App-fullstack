import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './globalStyles';

ReactDOM.render(
  <BrowserRouter >
      <GlobalStyles />
      <App />
  </BrowserRouter>
, document.getElementById('root'));
