import { useState } from "react";
import '../css/NavGlobal.css';
import Settings from './Settings';
import NavButton from './NavButton';
import NavSection from './NavSection';
import MenuButtonClose from "./MenuButtonClose";
import navMenu from "../js/navMenu";

function NavGlobal({darkMode, showDarkMode, signModalCallback, user, menuOn, setMenuOn, onBrowse}){
    const [dropdown0, setDropdown0] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);

    const item1 = 
    (
        <li className="navmenu__dropdown" 
            key={navMenu[0].title}>
            <NavButton title={navMenu[0].title} showDropDown={setDropdown0}/>
            
            <ul  className={`nav__submenu ${dropdown0  ? null : 'nav__submenu__close'}`}>
                <NavSection darkMode={darkMode} title={navMenu[0].title} onBrowse={onBrowse}/>
            </ul>
        </li>
    );

    const item2 = 
    (
        <li className="navmenu__dropdown" 
            key={navMenu[1].title}>
            <NavButton title={navMenu[1].title} showDropDown={setDropdown1}/>
            
            <ul  className={`nav__submenu ${dropdown1  ? null : 'nav__submenu__close'}`}>
                <NavSection darkMode={darkMode} title={navMenu[1].title} onBrowse={onBrowse}/>
            </ul>
        </li>
    );

    const item3 = 
    (
        <li className="navmenu__dropdown" 
            key={navMenu[2].title}>
            <NavButton title={navMenu[2].title} showDropDown={setDropdown2}/>
            
            <ul  className={`nav__submenu ${dropdown2  ? null : 'nav__submenu__close'}`}>
                <NavSection darkMode={darkMode} title={navMenu[2].title} onBrowse={onBrowse}/>
            </ul>
        </li>
    );

    const item4 = 
    (
        <li className="navmenu__dropdown" 
            key={navMenu[3].title}>
            <NavButton title={navMenu[3].title} showDropDown={setDropdown3}/>
            
            <ul  className={`nav__submenu ${dropdown3  ? null : 'nav__submenu__close'}`}>
                <NavSection darkMode={darkMode} title={navMenu[3].title} onBrowse={onBrowse}/>
            </ul>
        </li>
    );

    function signIn() {
        if (user === 'Sign In'){
            return '';
        }else {
            return user+',';
        }
    }

    return (
        
        <nav className={`nav ${menuOn ? null : 'nav__close'}`}>
            <div className={`${menuOn ? 'sidenav__query' : 'sidenav__query__close'}`}>
                <MenuButtonClose darkMode={darkMode} menuOn={menuOn} setMenuOn={setMenuOn}/>
            </div>
            <div className={`${menuOn ? 'sidenav__use' : 'sidenav__use__close'}`}>
                <ul className="nav__menu">
                    <li className="nav__home"><a className="nav__link__home" href="/" onClick={(event) => {onBrowse(event, 'Home');}}>Home</a></li>
                    {item1}
                    {item2}
                    {item3}
                    {item4}
                </ul>
                <Settings darkMode={darkMode} 
                    showDarkMode={showDarkMode} 
                    signModalCallback={signModalCallback}
                    user={user}/>
            </div>
        </nav>
        
        
    );
     
}

export default NavGlobal;