import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import selectButton from './reducers/selectButton';
import { createStore } from 'redux';
console.log("1. Create Store")
const store = createStore( selectButton );


ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
