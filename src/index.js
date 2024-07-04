import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


let initialStore = {
  actors:[],
  cricketers:[],
  cars:[],
  androidmobiles:[]
}

let reducer = (latestStore = initialStore,dispatchedObj) =>{

  console.log("inside reducer")
  console.log(dispatchedObj);

  if(dispatchedObj.type == "addActor"){
    return {...latestStore,actors:latestStore.actors.concat([dispatchedObj.data])};

  }else if(dispatchedObj.type == "addCricketer"){
    return{...latestStore,cricketers:latestStore.cricketers.concat([dispatchedObj.data]),}

  }else if (dispatchedObj.type == "Cars")
    {return{...latestStore,cars:latestStore.cars.concat([dispatchedObj.data]),}

  }else if (dispatchedObj.type == "Android Mobiles"){
    return{...latestStore,androidmobiles:latestStore.androidmobiles.concat([dispatchedObj.data]),}
  }
  return latestStore;
};

let store = createStore(reducer);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <App />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
