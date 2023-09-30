import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import * as userService from '../../services/userService';
import * as authService from '../../services/authService';


function SettingsModal({ show, handleClose }) {

    const { user } = useAuth();
    const [imgFile, setImgFile] = useState(null);
    const [userImgUrl, setUserImgUrl] = useState(user.imageUrl);

    useEffect(() => {
        (async () => {
            if (userImgUrl !== user.imageUrl) {
                // get auth token from server
                const imageKitAuthData = await authService.getImageKitAuthData();
                // upload photo to ImageKit setver
                // const imageKitResponse =await userService.uploadProfilePicture(imgFile, imageKitAuthData);

                // setUserImgUrl(imageKitResponse.url);
            }
        })();
    }, [imgFile]);

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = Object.fromEntries(new FormData(ev.target));

        if (formData.imageUrl.name == '') {
            delete formData.imageUrl;
            await userService.updateUserInfo(formData);
        } else {
            formData.imageUrl = userImgUrl;
            await userService.updateUserInfo(formData);
        }
    }

    function handleImageChange(ev) {
        setImgFile(ev.target.files[0]);
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