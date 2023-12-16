import '../css/Settings.css';
import SignInSetting from './SignInSetting';
import DarkModeSetting from './DarkModeSetting';

function Settings({darkMode, showDarkMode, signModalCallback, user}){
    return(
        <div className="container">
            <div className="settings">
                <SignInSetting signModalCallback={signModalCallback} user={user}/>
                <DarkModeSetting darkMode={darkMode} showDarkMode={showDarkMode}/>
            </div>
        </div>
    );
}

export default Settings;