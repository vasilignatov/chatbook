import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import * as userService from '../../services/userService';
import { convertBase64 } from '../../services/utils.js';

function SettingsModal({ show, handleClose }) {

    const { user, onUpdateUser } = useAuth();
    const [userImgUrl, setUserImgUrl] = useState(user.imageUrl);

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = Object.fromEntries(new FormData(ev.target));
        const { firstName, lastName, imageUrl } = formData;

        if (firstName == user.firstName && lastName == user.lastName && formData.imageUrl.name === '') {
            return handleClose();
        } else if (formData.imageUrl.name === '') {
            delete formData.imageUrl;
        } else {
            const covertedImage = await convertBase64(formData.imageUrl);
            formData.imageName = formData.imageUrl.name;
            formData.imageUrl = covertedImage;
        }

        const updatedUser = await userService.updateUserInfo(user._id, formData);
        // change User info
        onUpdateUser(updatedUser);
        handleClose();
    }

    function handleImageChange(ev) {
        setUserImgUrl(URL.createObjectURL(ev.target.files[0]));
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Настройки на профила</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit} id="profileSettings">

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
                    <img src={userImgUrl} />
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