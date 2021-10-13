import React, {useRef} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import '../styles.css';

const PrimaryAuth = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    return (
        <>
            <div style={{ backgroundColor: 'rgba(0,0,0)', width: '100vw', height: '100vh'}}>
                <div style={{
                        border: '3px solid grey', 
                        minWidth: "30%",
                        borderRadius: '20px', 
                        margin: '0', 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <Card className="m-4" style={{ backgroundColor: 'black'}}>
                        <Card.Body>
                            <h2 className="mb-4" style={{ color: 'gray'}}>Log In</h2>
                            <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{ color: '#BB2D3B'}}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                                <Form.Group id="password" className="mb-4">
                                    <Form.Label style={{ color: '#BB2D3B'}}>Password</Form.Label>
                                    <Form.Control id="password" type="password" placeholder="Password" required/>
                                </Form.Group>
                                <Button className="w-100" type="submit" variant="danger">Log in
                                </Button>
                            </Form>
                        </Card.Body>
                            <div className="w-100 text-center" style={{ color: 'white'}}>
                                Don't have an account? <Link to="/primary/signup" style={{ color: 'red'}}>Sign up</Link>
                            </div>
                        </Card>
                </div>
            </div>
        </>
    );
};

export default PrimaryAuth;
