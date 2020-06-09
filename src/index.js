import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Repositories from './Repositories';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App title="Bem vindo a minha página!!" />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
