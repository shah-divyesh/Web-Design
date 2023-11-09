import { useState } from 'react';

import Reorder from './jsx/Reorder';
import logo from './assets/logo.svg';

import './css/global.css';
import './App.css';


function App() {
  const [count, setCount] = useState(1);
  let flag = count > 0;
  const clickIncrement = () => setCount(count + 1);
  const clickDecrement = (e) => flag ? setCount(count - 1) : e.preventDefault();
  const clickReorder = () => setCount(count + 5); 


  return (
    <div className='App'>
      <h1 className='app__header'>Welcome to React Counter App</h1>
      <img className='app__logo' src={logo} alt="Logo" />
      <div className='content__container'>
        <span key={count}>Current Count is : {count}</span>
        <div className='button__container'>
          <button className='increment__button' onClick={clickIncrement}>+</button>
          <button className='decrement__button' disabled={!flag} onClick={clickDecrement}>-</button>
          {
            !flag ? <Reorder onReorder={clickReorder}/> : '' 
          }
        </div>
      </div>
    </div>
  );
}

export default App;
