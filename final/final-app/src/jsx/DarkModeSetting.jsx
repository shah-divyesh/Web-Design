import "../css/DarkModeSetting.css";

function DarkModeSetting({darkMode, showDarkMode}) {

    const darkModeFunction = () => {
        showDarkMode(!darkMode);
    };

    return(
        <button className="tools__button__mode"
                onClick={darkModeFunction}>
                    <i className="gg-dark-mode"></i>
                        {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
}

export default DarkModeSetting;