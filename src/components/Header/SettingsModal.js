import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { uploadProfilePicture } from '../../services/userService';
function SettingsModal({ show, handleClose }) {

    const { user } = useAuth();
    const [imgFile, setImgFile] = useState(user.imageUrl);
    const [userImgUrl, setUserImgUrl] = useState(user.imageUrl);

    // useEffect(() => {
    //     (async () => {
    //         const req = await uploadProfilePicture();
    //     })();
    // }, [userImgUrl]);

    function onSubmit(ev) {
        ev.preventDefault();
        const formData = Object.fromEntries(new FormData(ev.target));

        console.log(Object.keys(formData));  
        if(formData.imageUrl.name == '') {
            delete formData.imageUrl;
            console.log(Object.keys(formData));  
        }
    }

    function handleImageChange(ev) {
        console.log(ev.target);
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Настройки на профила</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit} id="profileSettings">

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Имейл </Form.Label>
                        <Form.Control
                            defaultValue={user.email}
                            name="email"
                            type="email"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Име</Form.Label>
                        <Form.Control
                            defaultValue={user.firstName}
                            name="firstName"
                            type="text"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                            defaultValue={user.lastName}
                            name="lastName"
                            type="text"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>Снимка на профила</Form.Label>
                        <Form.Control
                            onChange={handleImageChange}
                            name="imageUrl"
                            type="file"
                            accept="image/png, image/jpeg"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>

                </Form>

                <div className="user-photo-container">
                    <img src={user.imageUrl} />
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Затвори
                </Button>
                <Button variant="primary" type='submit' form='profileSettings' >
                    Запази Промените
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SettingsModal;