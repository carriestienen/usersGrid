import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import api from './lib/api';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faDesktop)
library.add(faUser)

ReactDOM.render(
  App({api}),
  document.getElementById('app')
);

module.hot.accept();