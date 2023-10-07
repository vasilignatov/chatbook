import { useState } from 'react';
import './Auth.css';
import Alert from 'react-bootstrap/Alert';
import RegisterModal from './RegisterModal.js';
import { login } from '../../services/authService.js';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const { onLogin } = useAuth();

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    async function onSubmitLogin(ev) {
        ev.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(ev.target));

        if (email == '') {
            setError(true);
            setErrorMsg('Моля въведете емейл');
            return;
        }
        if (password == '' || password.length < 8) {
            setError(true);
            setErrorMsg('Моля въведете парола (минимум 8 символа)');
            return;
        }

        setError(false);
        setErrorMsg('');

        const { user, tokens } = await login(email, password);
        console.log({user, tokens});
        onLogin({ user, tokens });
        
        navigate('/');
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
                        <form onSubmit={onSubmitLogin}>
                            {
                                error && <Alert variant={'danger'}>{errorMsg}</Alert>
                            }
                            <input type="email" id="email" placeholder="Имейл или телефонен номер" name="email" />
                            <input type="password" id="password" placeholder="Парола" name="password" />
                            <input type="submit" className="btn submit" value="Влизане" />
                        </form>
                        <a href="#" className="forgoten-pass">Забравена парола?</a>
                        <hr />
                        <button className="btn newProfile" onClick={handleShowModal} >Създаване на нов профил</button>
                    </div>
                </div>
            </div>
            {
                show && <RegisterModal handleShow={handleShowModal} handleClose={handleCloseModal} show={show} />
            }
        </>
    )
}

export default Login;