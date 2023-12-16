import { useState } from "react";
import '../css/MainSection.css';

import DefaultMain from './DefaultMain'
import TransportationNewYork from "./TransportationNewYork";
import FoodPlaces from "./FoodPlaces";
import TouristPlaces from "./TouristPlaces";
import ReachNewYork from './ReachNewYork';
import SignUp from './SignUp';
import Success from './Success';

function MainSection({link, setLink, menuOn, onBrowse, darkMode, setUser}) {

    const [name, setName] = useState('');
    const [isName, setIsName] = useState(false);

    const [password, setPassword] = useState(' ');
    const [isPassword, setIsPassword] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState(' ');
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(false);

    const [phone, setPhone] = useState('');
    const[isPhone, setIsPhone] = useState(false);

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    

    return (
        <main className={` ${darkMode ? 'dark' : 'light'} ${menuOn ? 'main__navopen' : 'main'}`}>
            {
                link === 'Home' ? <DefaultMain darkMode={darkMode} onBrowse={onBrowse}/>
                    : link === 'Modes of Transport' ? <TransportationNewYork setLink={setLink}/>
                        : link === 'Famous Food Places' ? <FoodPlaces darkMode={darkMode} setLink={setLink}/>
                            : link === 'Get to New York' ? <ReachNewYork darkMode={darkMode} setLink={setLink}/>
                                : link === 'Tourist Places' ? <TouristPlaces darkMode={darkMode} setLink={setLink}/>
                                    :  link === 'Sign Up' ? <SignUp name={name}
                                                                    setName={setName} isName={isName} setIsName={setIsName} password={password} setPassword={setPassword} isPassword={isPassword} setIsPassword={setIsPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
                                                                    isConfirmPassword={isConfirmPassword} setIsConfirmPassword={setIsConfirmPassword} email={email} setEmail={setEmail} isEmail={isEmail} setIsEmail={setIsEmail} phone={phone} setPhone={setPhone} isPhone={isPhone} setIsPhone={setIsPhone} country={country} setCountry={setCountry} city={city} setCity={setCity}
                                                                    setUser={setUser} 
                                                                    onBrowse={onBrowse}/>
                                        : <Success name={name}
                                                    setName={setName} setPassword={setPassword} setConfirmPassword={setConfirmPassword}
                                                    setEmail={setEmail} setPhone={setPhone} setCountry={setCountry} setCity={setCity} 
                                                    onBrowse={onBrowse}/>

            }
        </main>
    );    
}

export default MainSection;