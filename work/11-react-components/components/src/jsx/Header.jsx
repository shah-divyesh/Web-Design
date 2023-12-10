import logo from "../assets/logo__cat.png";
import "../css/Header.css";
import GlobalNav from "./GlobalNav";

function Header({ setLink}){
    return(
        <header className="header">
            <img className="header__logo" 
                src={logo}
                alt="Header Logo Image" 
                aria-label="Header Logo Image, click here to go on HomePage"/>
            <h1 className="header__title">Cat's Page</h1>
            <GlobalNav className={"header__nav"} setLink={setLink}/>

        </header>
    );
}

export default Header;