import { useState } from "react";
import "../css/NavButton.css";

function NavButton({title, showDropDown}) {

    const [chevron, setChevron] = useState(true);

    const clickFunction = () => {
        setChevron(!chevron);
        showDropDown(chevron);
    };

    return (
        <button className= {`navbutton ${!chevron ? 'navbutton__click' : null}`} onClick={clickFunction}>
            {title}
            {   
                chevron ? <i className="gg-chevron-down"></i> : <i className="gg-chevron-up"></i>
            }    
        </button>
    );    
}

export default NavButton;