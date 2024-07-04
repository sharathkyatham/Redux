import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let inputRef = useRef();
  let dispatch = useDispatch();
  let storeObj = useSelector((store) => {
    return store;
  });

  return (
  <div className='App'>
    <div>
      <input ref={inputRef}></input>
      <button onClick={() => {
        dispatch({type:"addActor",data:inputRef.current.value})
      }}>Add Actor</button>

      <button onClick={() => {
        dispatch({type:"addCricketer", data:inputRef.current.value})
      }}>Add Cricketer</button>

      <button onClick={() =>{
        dispatch({type:"Cars", data:inputRef.current.value})
      }}>Cars</button>

      <button onClick={() => {
        dispatch({type:"Android Mobiles", data:inputRef.current.value})
      }}>Android Mobiles</button>
      
      <h1>Actors:{storeObj.actors.join()}</h1>
      <h1>Cricketers:{storeObj.cricketers.join()}</h1>
      <h1>Cars:{storeObj.cars.join()}</h1>
      <h1>Android Mobiles:{storeObj.androidmobiles.join()}</h1>
    </div>
  </div>
  );
}

export default App;
