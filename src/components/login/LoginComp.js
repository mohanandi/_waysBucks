import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";

const LoginComp = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch Demo Modal
            </Button>

            <Modal show={show} onHide={handleClose} size="sm" centered>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control className="border border-3 border-danger" type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control className="border border-3 border-danger" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button style={{ width: '100%' }} variant="danger" type="submit">
                                Login
                            </Button>
                            {/* <Form.Control style={{ backgroundColor: '#BD0707', textColor: 'White' }} type="submit" placeholder="Password" /> */}
                        </Form.Group >
                    </Form>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default LoginComp;