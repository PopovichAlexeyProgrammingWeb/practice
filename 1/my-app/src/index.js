import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id:1, name: 'Sudar'},
  {id:2, name: 'Reception'},
  {id:3, name: 'Poland'},
  {id:4, name: 'Proscowya'},
  {id:5, name: 'Xiaomi'},
  {id:6, name: 'Ios'}
]

let messages = [
  {id:1, message: 'fmsbfbjdsbfjsd'},
  {id:2, message: 'Receptiondsfsdfsdfsdfsd'},
  {id:3, message: 'Polandsfddfsfdfsdfsdf'},
  {id:4, message: 'Proscowyasdfsdfsdfsd'},
  {id:5, message: 'Xiaomisdfsdfsdfsdfsd'},
  {id:6, message: 'Iosdsfsdfsdfsdf'}
]


ReactDOM.render(<App dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
