import { useState } from "react";
import '../css/SignUp.css';

function SignUp({ name, setName, isName, setIsName, password, setPassword, isPassword, setIsPassword, confirmPassword, setConfirmPassword,
    isConfirmPassword, setIsConfirmPassword, email, setEmail, isEmail, setIsEmail, phone, setPhone, isPhone, setIsPhone, country, setCountry, city, setCity, onBrowse, setUser}){
    
        // email check format
    const pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    // chevron up or down
    const [chevron, setChevron] = useState(false);

    const getName = (e) => {
        let name = e.target.value; 

        if (name.length < 1) { 
            if (isName) {
                setIsName(!isName);
            }
        } else {
            if (!isName) {
                setIsName(!isName);
            }
        }
        setName(name);
    }

    const getPassword = (e) => {
        let pwd = e.target.value;
        if (pwd.length < 1) { 
            if (isPassword) {
                setIsPassword(!isPassword);
            }
        } else {
            if (!isPassword) {
                setIsPassword(!isPassword);
            }
        }

        setPassword(pwd);
    }

    const getConfirmPassword = (e) => {
        const confirmPwd = e.target.value;
        setConfirmPassword(confirmPwd);
        // Validate if password and confirmPassword match
        if (password === confirmPwd) {
            setIsConfirmPassword(true);
        } else {
            setIsConfirmPassword(false);
        }
    }

    const getEmail = (e) => {
        var email = e.target.value;
        setIsEmail(true);
        setEmail(email);
    }

    const getPhone = (e) => {
        let phone = e.target.value;
        if (phone.length != 10) { 
            if (isPhone) {
                setIsPhone(!isPhone);
            }
        } else {
            if (!isPhone) {
                setIsPhone(!isPhone);
            }
        }
        setPhone(phone); 
    }

    const getCountry = (e) => {
        setCountry(e.target.value); 
    }

    const getCity = (e) => {
        setCity(e.target.value);
    }

    const openMenu = () => {
        setChevron(!chevron);
    }

    return( 
        <div className="sign__up">
            <div className="sign__up__basic">
                <button className="sign__up__button" onClick={ openMenu }>
                    <h3 className="sign__up__title">Sign Up Form </h3> 
                    {   
                        chevron ?
                            <i className="gg-chevron-down"></i>
                            : <i className="gg-chevron-up"></i>
                    }
                </button>
                <fieldset className={`${chevron ? 'fieldset__close' : 'fieldset'}`}>                    
                    <label>
                        <span className={`${isName ? null : 'fieldset__check__invalid'}`}>Full Name*:</span>
                        <input className={`${isName ? 'fieldset__input' : 'fieldset__input__invalid'}`} type="text" name="name" onInput={ getName } value={ name }></input>
                    </label>
                    <label>
                        <span className={`${isPassword ? null : 'fieldset__check__invalid'}`}>Password*:</span>
                        <input type="text" name="password" onInput={ getPassword } value={ password }></input>
                    </label>
                    <label>
                        <span className={`${isConfirmPassword ? null : 'fieldset__check__invalid'}`}>Confirm Password*:</span>
                        <input type="text" name="confirm password" onInput={ getConfirmPassword } value={ confirmPassword }></input>
                    </label>
                    <label>
                        <span className={`${isEmail ? null : 'fieldset__check__invalid'}`}>Email*:</span>
                        <input type="text" name="email" onInput={ getEmail } value={email}></input>
                    </label>
                    <label>
                        <span className={`${isPhone ? null : 'fieldset__check__invalid'}`}>Phone:</span>
                        <input type="text" name="phone" onInput={ getPhone } value={phone}></input>
                    </label>
                    <label>
                        <span>Country:</span>
                        <input type="text" name="country" onInput={ getCountry } value={country}></input>
                    </label>
                    <label>
                        <span>City:</span>
                        <input type="text" name="city" onInput={ getCity } value={city}></input>
                    </label>
                </fieldset>  
            </div>
            {/* || !isPassword || !isConfirmPassword || !isEmail */}
            <a href="/" onClick={ (event) => {
                console.log(isConfirmPassword);
                if (!isName || !isPassword || !isConfirmPassword || !isEmail  ){
                    event.preventDefault();
                }else {
                    setUser(name);
                    onBrowse(event, 'Success');
                }
            }}>
                Ready to Explore New York!!!
            </a>
        </div>

    );

}

export default SignUp;