// import { useState } from "react";
import '../css/Header.css';
import NavGlobal from './NavGlobal';
import MenuButtonOpen from './MenuButtonOpen';
import logo from '../assets/logo__image.jpeg';

function Header({darkMode, showDarkMode, signModalCallback, user, menuOn, setMenuOn, onBrowse}){
    return(
        <header className="header">
            <MenuButtonOpen darkMode={darkMode} menuOn={menuOn} setMenuOn={setMenuOn}/>
            <a className="header__link" href="/" onClick={(event) => {
                                                    onBrowse(event, 'Home');
                                                }} >
                <img className={`header__logo ${darkMode ? 'header__logo__dark' : null}`} src={logo} alt='click here to go to home page'/>
            </a>

            <NavGlobal darkMode={darkMode} 
                        showDarkMode={showDarkMode} 
                        signModalCallback={signModalCallback}
                        user={user}
                        menuOn={menuOn}
                        setMenuOn={setMenuOn}
                        onBrowse={onBrowse}/>
        </header>
    );
    
}

export default Header;