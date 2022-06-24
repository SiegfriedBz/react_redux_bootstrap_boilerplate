import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import  myReducer  from "./reducers/myReducer"


const reducers = combineReducers({
  myReducer: myReducer,
})

const store = createStore(reducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
