import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


// import { combineReducers } from 'redux';

// function saveToLocalStorage(state) {
//     try{
//         const serializedState = JSON.stringify(state)
//         localStorage.setItem('state', serializedState) 
//     } catch(e) {
//         console.log(e);
//     }
// }



// const appReducer = combineReducers({
//     cartReducer
//   })

//   const rootReducer = (state, action) => {
//     if (action.type === 'HARD_RELOAD') {
//       console.log("purchased")
//     //   state = undefined
//     }
  
//     return appReducer(state, action)
//   }



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
