import "../css/SignInSetting.css";

function SignInSetting({signModalCallback, user}) {

    const signModalFunction = () => {
        signModalCallback();
    };

    return (
        <button className="sign__in"
                onClick={signModalFunction}>
                    <i className="gg-user"></i>
                    Welcome! {user}
        </button>
    );
}

export default SignInSetting;
