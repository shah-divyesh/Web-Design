import "../css/Success.css";

function Success({name, setName, setPassword, setConfirmPassword, setEmail, setPhone, setCountry, setCity, setUser, onBrowse}) {
    
        const go = (e) => {
            setUser(name);
            onBrowse(e, 'Home');
            setName('');
            setPassword('');
            setConfirmPassword('');
            setEmail('');
            setPhone('');
            setCountry('');
            setCity('');
        };

        const back = (e) => {
            onBrowse(e, 'Sign Up');
        }

        return (
            <div className="success__box">
                
                <div className="success">
                    <span>You, <p>{name}</p> registered successfully!</span>
                    <div>
                        <a href="/" onClick={ go }>Let's Browse!</a>
                        <a href="/" onClick={ back }>Something is wrong</a>
                    </div>
                </div>
            </div>
        );

}

export default Success;