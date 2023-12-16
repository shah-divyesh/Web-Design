import "../css/MenuButtonClose.css";

function MenuButtonClose({darkMode, menuOn, setMenuOn}) {
    
    const clickMenuButton = () => {
        setMenuOn(!menuOn);
    };

    return (
        <button className={`menu__button__close ${darkMode ? 'menu__button__close__dark' : null}`}
                onClick={clickMenuButton}>
                  <i className='gg-close'></i>
            Close
        </button>
    );
}

export default MenuButtonClose;