import { useState } from "react";
import NavButton from "./NavButton";
import menu from "../js/menu";
import "../css/GlobalNav.css";

function GlobalNav({className, setLink}){
    function onNav(e, target){
        e.preventDefault();
        setLink(target);
    }

    const item = menu.map((item) =>{ 
        return(
            <li className="nav__item" key={item.name}>
                <a 
                    className="nav__link" 
                    href={item.path}
                    onClick={(e) => {onNav(e, `${item.name}`)}}>
                    {item.name}    
                </a>
            </li>
        );
    });

    const [showMenu, setShowMenu] = useState(false);
    const list = 
        <ul className={`${!showMenu ? "close" : null } nav__list`}>
            {item}
        </ul>
    ;

    const buttonMenuFunction = () => {
        setShowMenu(!showMenu);
    };

    return(
        <nav className={className}>
            <NavButton clickFunction={buttonMenuFunction}/>
            {list}
        </nav>
    );
}

export default GlobalNav;