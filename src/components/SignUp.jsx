import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("");
            setLoading(true);
            await signUp(nameRef.current.value, lastNameRef.current.value, emailRef.current.value, usernameRef.current.value, passwordRef.current.value);
            navigate("/login");
        } catch {
            setError("Failed to create an account")
            setTimeout(() => {
                setError("");
            }, 10000);
        }

        setLoading(false)
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
                            <h2 className="text-center mb-3">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="name">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" ref={nameRef} required />
                                    </Form.Group>
                                    <Form.Group id="name">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" ref={lastNameRef} required />
                                    </Form.Group>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group id="username">
                                        <Form.Label>User name</Form.Label>
                                        <Form.Control type="text" ref={usernameRef} required />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                    </Form.Group>
                                    <Form.Group id="password-confirm">
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control type="password" ref={passwordConfirmRef} required />
                                    </Form.Group>
                                    <Button disable={loading} className="w-100 mt-2" type="submit">
                                        Sign Up
                                    </Button>
                                </Form>
                            </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SignUp;
