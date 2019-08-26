import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const overallRating = {
  feelling: '',
  understanding: '',
  support: '',
  comments: '',
}

//holds all ratings
const overallReducer = (state = overallRating, action) => {
  switch (action.type) {
    case 'FEELING':
      return {
        ...state,
        feeling: action.payload
      };
    case 'UNDERSTANDING':
      return {
        ...state,
        understanding: action.payload
      };
    case 'SUPPORT':
      return {
        ...state,
        support: action.payload
      };
    case 'COMMENTS':
      return {
        ...state,
        comments: action.payload
      };
    case 'CLEAR':
      return overallRating;
    default:
      return state;
  }
}

//keeps track of which radio buttons have been clicked and refreshes upon new url to help with data integrity
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
    currentRadio,
    overallReducer
  }),
  applyMiddleware(logger),
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
