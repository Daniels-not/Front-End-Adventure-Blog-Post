import React, { useState, useRef } from 'react'
import { database } from "../../src/database/firebase";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./context/AuthContext";
import { Container } from "react-bootstrap";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios"

const NewContent = () => {

    const titleRef = useRef();
    const contentRef = useRef();
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [error, setError] = useState();


    const handleNewAdventure = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const content = contentRef.current.value;
        const author = currentUser.email;
        const date = `${new Date().toLocaleString()}`;
        const newAdventure = { title, content, author, date };

        fetch("https://blog-post-react-dd4fa-default-rtdb.firebaseio.com/.json", {
            method: "POST",
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(newAdventure)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        setTimeout(() => {
            navigate("/dashboard");
        }, 2000)
    }

    return (
        <div>
            <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
            >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Add new content</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleNewAdventure}>
                                    <Form.Group id="title" className="mb-3">
                                        <Form.Label>Tittle</Form.Label>
                                        <Form.Control type="text" ref={titleRef} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="textarea">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control placeholder="Some content here" as="textarea" rows={3} ref={contentRef} required/>
                                    </Form.Group>
                                    <Button className="w-100 mt-2 color btn btn-primary" type="submit">
                                        Post Adventure
                                    </Button>
                                    <Link to="/dashboard" >
                                        <Button className="w-100 mt-2 color btn btn-secondary" type="submit">
                                            Go back
                                        </Button>
                                    </Link>
                                </Form>
                                {/* <div className="w-100 text-center mt-3">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div> */}
                            </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default NewContent;
