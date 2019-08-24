import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feeling = (state = 0, action) => {
  switch (action.type) {
    case 'FEELING':
      return action.payload;
    default:
      return state;
  }
}

const understanding = (state = 0, action) => {
  switch (action.type) {
    case 'UNDERSTANDING':
      return action.payload;
    default:
      return state;
  }
}

const support = (state = 0, action) => {
  switch (action.type) {
    case 'SUPPORT':
      return action.payload;
    default:
      return state;
  }
}

const comments = (state = '', action) => {
  switch (action.type) {
    case 'COMMENTS':
      return action.payload;
    default:
      return state;
  }
}

const currentRadio = (state = 0, action) => {
  switch (action.type){
    case 'RADIO':
      return action.payload;
    case 'FEELING':
      return 0;
    case 'UNDERSTANDING':
      return 0;
    case 'SUPPORT':
      return 0;
    case 'COMMENTS':
      return 0;
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    feeling,
    understanding,
    support,
    comments,
    currentRadio
  }),
  applyMiddleware(logger),
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
