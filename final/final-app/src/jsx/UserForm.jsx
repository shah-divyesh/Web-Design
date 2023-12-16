import { useState } from "react";
import logo from "../assets/logo__image.jpeg";
import "../css/UserForm.css";

function UserInfoForm({signModalRef, signModalCallback, signModal, setUser, password, setPassword,
    isName, setIsName, validpassword, setvalidpassword, darkMode, menuOn, setMenuOn, onBrowse}) {

    const [subName, setSubName] = useState('');
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

    const checkName = (event) => {
        let length = event.target.value.length;
        console.log(event.target.value);
        if (length > 2 && length <= 20){
            if (!isName) {
                setIsName(!isName);
            }
        }else {
            if (isName) {
                setIsName(!isName);
            }
        }

        setSubName(event.target.value);
        
    };

    const getpassword = (event) => {
        let t = event.target.value;
        setPassword(t);
    };

    const checkPassword = () => {
        let length = password.length;
        if (length >= 1) {
            if (!validpassword) {
                setvalidpassword(!validpassword);
            }
        } else {
            if (validpassword) {
                setvalidpassword(!validpassword);
            }
        }
    };

    const submitFunction = (event) => {
        checkPassword();
        event.preventDefault();
        if (!isName || !validpassword) { 
            event.preventDefault();
        }
        setUser(subName);
        setIsSubmissionSuccessful(true);
        signModalCallback();
        onBrowse(event, 'Success');
    };

    const signupFunction = (e) => {
        signModalCallback();
        if (menuOn){
            setMenuOn(!menuOn);
        }  
        onBrowse(e,'Sign Up'); 
    };

    return (
    <>
        <dialog className={`dialog ${!signModal || isSubmissionSuccessful  ? 'dialog__close' : null}`} ref={signModalRef}>
        <form className="form" method="post" onSubmit={submitFunction}  >
            <img src={logo} alt="logo" className={`${darkMode ? 'form__img' : null}`}></img>
            <label className="form__name">
                <span className="name">Name: </span>
                <input className="form__name__input " type="text" name="userName" onInput={checkName}></input>
                <div className={` ${isName ? 'valid' : 'invalid'}`}>Please input a name</div>
            </label>

            <label className="form__password">
                <span className="password">Password: </span>
                <input className="form__password__input" type="text" name="userpassword" onInput={getpassword}></input>
                <div className={` ${!validpassword ? 'valid' : 'invalid'}`}>{!validpassword ? '' : 'Please input email'}</div>
            </label>

            <div className="form__link">Don't have an account? <a className="link__signup" href="/" onClick={ signupFunction }>Sign Up</a></div>
            <div className="form__button">
                <button className="form__button__submit" type="submit" onSubmit={ submitFunction }>Sign In</button>
                <button className="form__button__cancel" type="button" onClick={ signModalCallback }>Cancel</button>
            </div>
        </form>
        </dialog>
    </>
    );
}

export default UserInfoForm;