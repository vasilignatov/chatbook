import './RegisterModal.css';
import endpoints from '../../endpoints.json';

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import * as authService from '../../services/authService.js';

const RegisterModal = ({ show, handleClose, handleShow }) => {
    const { onLogin } = useAuth();
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    async function onSubmitRegister(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (formData.firstName == '' || formData.firstName.length < 2) {
            setError(true);
            setErrorMsg('Моля въведете собствено име (минимална дължина 2 символа)');
            return;
        }

        if (formData.lastName == '' || formData.lastName.length < 2) {
            setError(true);
            setErrorMsg('Моля въведете фамилно име (минимална дължина 2 символа)');
            return;
        }

        if (formData.email == '') {
            setError(true);
            setErrorMsg('Моля въведете емейл');
            return;
        }

        if (formData.password == '' || formData.password.length < 8) {
            setError(true);
            setErrorMsg('Моля въведете парола (минимум 8 символа)');
            return;
        }
        setError(false);
        setErrorMsg('');

        const response = await authService.register(formData);
        if (response.statusCode == 400) {
            setError(true);
            setErrorMsg(response.message);
            return;
        }
        onLogin({
            id: response.user.id,
            email: response.user.email,
            firstName: response.user.firstName,
            lastName: response.user.lastName,
            accessToken: response.tokens.access.token,
            refreshToken: response.tokens.refresh.token
        });
        navigate('/chat');
    }

    return (
        <Modal show={show} onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    error && <Alert variant={'danger'}>{errorMsg}</Alert>
                }

                <Form onSubmit={onSubmitRegister} id='register-form'>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <div className="row">
                            <div className="col">
                                <Form.Control
                                    name="firstName"
                                    type="firstName"
                                    placeholder="Собствено име"
                                    autoFocus
                                />
                            </div>
                            <div className="col">
                                <Form.Control
                                    name="lastName"
                                    type="lastName"
                                    placeholder="Фамилно име"
                                    autoFocus
                                />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label></Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Имейл"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label></Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Парола"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="text-center register-btn">
                <Button variant="success" form='register-form' type='submit'>
                    Регистрация
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RegisterModal;