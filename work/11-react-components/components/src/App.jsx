import { useState } from 'react';
import './App.css';
import Header from './jsx/Header';
import Footer from './jsx/Footer';
import MainSection from './jsx/MainSection';

function App() {
  const [flag, setFlag] = useState('Home');

  return (
    <div className='app'>
      <Header setLink={setFlag}/>
      <MainSection link={flag} setLink={setFlag}/>
      <Footer/>
    </div>
  );
}

export default App;

