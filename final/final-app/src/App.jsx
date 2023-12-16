import { useState, useRef } from 'react';
import './App.css';
import Header from './jsx/Header';
import Footer from './jsx/Footer';
import UserForm from './jsx/UserForm';
import MainSection from './jsx/MainSection';

function App() {

  // Form states
  const [password, setPassword] = useState('');
  const [isName, setIsName] = useState(false);
  const [validpassword, setvalidpassword] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [link, setLink] = useState('Home');
  const [menuOn, setMenuOn] = useState(false);
  const [user, setUser] = useState("Sign In");
  const signModalRef = useRef(null);
  const [signModal, showSignModal] = useState(false);


  const signModalCallback = function() {
    if (!signModal) {
      signModalRef.current.showModal();
      showSignModal(!signModal);
    }else {
      signModalRef.current.close();
      showSignModal(!signModal);
    }
  };

  function onBrowse(event, target) {
    event.preventDefault();
    setLink(target);
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <a className='skiplink' href='MainSection' aria-label='click and go into main'>Skip to Content</a>
        <Header darkMode={darkMode} showDarkMode={setDarkMode} signModalCallback={signModalCallback} user={user} menuOn={menuOn} setMenuOn={setMenuOn} onBrowse={onBrowse}/>
        <MainSection darkMode={darkMode}
            menuOn={menuOn} 
            setMenuOn={setMenuOn}
            link={link}
            setUser={setUser}
            setLink={setLink}
            onBrowse={onBrowse}/>
        <Footer menuOn={menuOn}/> 
        <UserForm signModalRef={signModalRef} 
                    signModalCallback={signModalCallback}
                    signModal={signModal}
                    setUser={setUser}
                    password={password}
                    setPassword={setPassword}
                    validpassword={validpassword}
                    setvalidpassword={setvalidpassword}
                    isName={isName}
                    setIsName={setIsName}
                    darkMode={darkMode}
                    menuOn={menuOn}
                    setMenuOn={setMenuOn}
                    onBrowse={onBrowse}/>
    </div>
  )
}

export default App
