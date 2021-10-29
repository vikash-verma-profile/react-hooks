import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

const useDocumentTitle=title=>{
  useEffect(()=>{
    document.title=title;
  },[title]);
}

function App() {

  const [count,SetCount]=useState(0);
  const incrementCount=()=>SetCount(count+1);
  useDocumentTitle(`you clicked ${count} times` );
  

  return (
    <div className="App">
      <p>
        You clicked {count} times
        </p>
        <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
