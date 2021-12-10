import React, { useState, useEffect } from 'react';
import { useAuth } from "./context/AuthContext";
import { Nav, Navbar } from 'react-bootstrap';
import { Container, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'


const DashBoard = () => {

    const [error, setError] = useState("");
    const [adventure, setAdventure] = useState([]);
    const navigate = useNavigate();
    const { currentUser, logOut } = useAuth();

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate("/login");
        }catch(e){
            setError(e.message);
            setTimeout(() => {
                setError("");
            }, 15000);
        }
    }



    useEffect(() => {
        fetch("https://blog-post-react-dd4fa-default-rtdb.firebaseio.com/.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const getAdventure = [];
            for(let key in data){
                getAdventure.unshift({
                    ...data[key],
                    id: key
                });
            }
            adventure.push(getAdventure);
            console.log(adventure);
        })
    }, []);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://i.ibb.co/rdpZ1Mq/adventure-game.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                        Front end Adventure
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#adventurelevel" disabled>Adventure Level</Nav.Link>
                        <Nav.Link href="#adventurelevel">
                            <Link to="/dashboard/new_adventure" className="text-light">
                                Create adventure
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav><Nav.Link href="#user">Signed in as: {currentUser.email}</Nav.Link></Nav>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="md" onClick={handleLogOut}>
                            Log out
                        </Button>
                    </div>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            {error && <Alert variant="danger">{error}</Alert>}

            {
                adventure.map((adventure, index) => {
                    return (
                        <Container style={{ minHeight: "100vh" }} key={index}>
                            <Card className="mt-4">
                                <Card.Header as="h5">{adventure[index].title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {adventure[index].content}
                                    </Card.Text>
                                </Card.Body>
                                <footer className="blockquote-footer m-3">
                                    Created by <cite title="Source Title">{adventure[index].author}</cite>
                                </footer>
                                <Card.Footer className="text-muted text-center">{adventure[index].date}</Card.Footer>
                            </Card>
                        </Container>
                    )
                })
            }
        </div>
    )
}


export default DashBoard;