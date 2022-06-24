import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import  myReducer  from "./reducers/myReducer"

const reducers = combineReducers({
  myReducer: myReducer,
})

const middleWares = applyMiddleware(logger)

const store = createStore(reducers, {}, middleWares)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
