import { useState } from 'react';
import './Auth.css';

import RegisterModal from './RegisterModal.js';

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function onSubmit(ev) {
        ev.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(ev.target));
        if (email == '' || password == '') return;

        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const userData = await res.json();

        console.log(userData);
    }

    return (
        <>
            <div className="login">
                <div className="login__container">
                    <div className="heading_sec">
                        <h1 className="login__header">chatbook</h1>
                        <h4 className="login__subheader">Chatbook ви помага да се свързвате и да споделяте с хората в живота ви.</h4>
                    </div>

                    <div className="input_sec">
                        <form onSubmit={onSubmit}>
                            <input type="email" id="email" placeholder="Имейл или телефонен номер" name="email" />
                            <input type="password" id="password" placeholder="Парола" name="password" />
                            <input type="submit" className="btn submit" value="Влизане" />
                        </form>
                        <a href="#" className="forgoten-pass">Забравена парола?</a>
                        <hr />
                        <button className="btn newProfile" onClick={handleShow} >Създаване на нов профил</button>
                    </div>
                </div>
            </div>
            {
                show && <RegisterModal handleShow={handleShow} handleClose={handleClose} show={show} />
            }
        </>
    )
}

export default Login;