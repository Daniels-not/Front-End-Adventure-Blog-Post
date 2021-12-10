import React from 'react';
import { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";

const LogIn = () => {

    const navigate = useNavigate();
    const { logIn } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("");
            setLoading(true);
            await logIn(emailRef.current.value, passwordRef.current.value);
            console.log("Logged in");
            navigate("/dashboard");
        } catch(err) {
            console.log(err);
            setError("Email or Password Invalid");
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
                                <h2 className="text-center mb-4">Log In</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                    </Form.Group>
                                    <Button disabled={loading} className="w-100 mt-2" type="submit">
                                        Log in
                                    </Button>
                                    <Link to="/" >
                                        <Button className="w-100 mt-2 color btn btn-secondary" type="submit">
                                            Home page
                                        </Button>
                                    </Link>
                                </Form>
                                {/* <div className="w-100 text-center mt-3">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div> */}
                            </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
        </Container>
        </div>
    )
}

export default LogIn;
