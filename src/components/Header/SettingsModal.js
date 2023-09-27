import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SettingsModal({show, handleClose}) {


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Име</Form.Label>
                        <Form.Control
                            name="firstName"
                            type="text"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                            name="lastName"
                            type="text"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Снимка на профила</Form.Label>
                        <Form.Control
                            name="imageUrl"
                            type="file"
                            accept="image/png, image/jpeg"
                            placeholder="name@example.com"
                            autoFocus
                        />
                        <img src="" d />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Затвори
          </Button>
                <Button variant="primary">
                    Запази Промените
          </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SettingsModal;