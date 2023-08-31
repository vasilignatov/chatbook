import './RegisterModal.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const RegisterModal = ({ show, handleClose, handleShow }) => {
    return (
        <Modal show={show} onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form >

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <div className="row">
                            <div className="col">
                                <Form.Control
                                    type="firstName"
                                    placeholder="Собствено име"
                                    autoFocus
                                />
                            </div>
                            <div className="col">
                                <Form.Control
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
                            type="emai"
                            placeholder="Имейл"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Парола"
                            autoFocus
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer class="text-center register-btn">
                <Button variant="success" onClick={handleClose} centered>
                    Регистрация
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RegisterModal;