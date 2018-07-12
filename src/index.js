import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import api from './lib/api';

ReactDOM.render(
  App({api}),
  document.getElementById('app')
);

module.hot.accept();