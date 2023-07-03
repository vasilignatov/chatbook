import { useLayoutEffect, useState } from 'react';
import './Login.css';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(ev) {
        ev.preventDefault();
        
        const formData = new FormData(ev.currentTarget);
        setUsername(formData.get('username'));
        setPassword(formData.get('password'));

        if(username == '' || password == '') return;

        
    }

    return (
        <div className="login">

            <div className="login__container">
                <div className="heading_sec">
                    <h1 className="login__header">chatbook</h1>
                    <h4 className="login__subheader">Chatbook ви помага да се свързвате и да споделяте с хората в живота ви.</h4>
                </div>

                <div className="input_sec">
                    <form onSubmit={onSubmit}>
                        <input type="text" id="username" placeholder="Имейл или телефонен номер" name="username" autocomplete="off" />
                        <input type="password" id="password" placeholder="Парола" name="password" autocomplete="off"/>
                        <input type="submit" className="btn submit" value="Влизане" />
                    </form>
                    <a href="#" className="forgoten-pass">Забравена парола?</a>
                    <hr />
                    <button className="btn newProfile">Създаване на нов профил</button>
                </div>
            </div>

        </div>

    )
}

export default Login;