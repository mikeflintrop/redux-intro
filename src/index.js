import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// Reducer!
const count = (state = 0, action) => {
  console.log('Hey! I am a reducer!', action);

  switch (action.type) {
    case 'INCREASE':
      // console.log('You clicked INCREASE')
      return state + 1;
    case 'DECREASE':
      // console.log('You clicked DECREASE')
      return state - 1;
    default: 
      // if action.type is anything else, return last value of state
      return state;
  }
  // returning state from reducer function
  // return state;
}
// Reducer!
const elementList = (state = [], action) => {
  console.log('Element List reducer: ', action)

  switch (action.type) {
    case 'ADD_ELEMENT':
      console.log('You clicked ADD_ELEMENT', action.payload);
      // state.push(action.payload); -- wrong
      // spread operator allows new array to be passed with action.payload
      return [...state, action.payload];
    default: 
      // if action.type is anything else, return last value of state
      return state;
  }
  // returning state from reducer function
  // return state;
}

// Store!
const storeInstance = createStore(
  combineReducers(
    {
      count,
      elementList
    }
  ),
  // tell redux that we want to use our new logger
  applyMiddleware(
    logger
  )
);

// Provider lets redux and react talk to one another
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
