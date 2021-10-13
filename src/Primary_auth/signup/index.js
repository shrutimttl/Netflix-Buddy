import React, {useState, useRef} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import '../styles.css';

const PrimaryAuth = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [passwordMatch, setPasswordMatch] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if(password !== confirmPassword) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
        console.log(email, password, confirmPassword);
    }

    return (
        <>
            <div style={{ backgroundColor: 'rgba(0,0,0)', width: '100vw', height: '100vh'}}>
                <div style={{
                        border: '3px solid gray',
                        borderRadius: '20px', 
                        minWidth: "30%",
                        margin: '0', 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)'
                    }}>
                    {/* <Tabs defaultActiveKey="signup" id="uncontrolled-tab-example" className="m-3"> */}
                        {/* <Tab eventKey="signup" title="SignUp"> */}
                        <Card className="m-4" style={{ backgroundColor: 'black'}}>
                        <Card.Body>
                            <h2 className="mb-4" style={{ color: 'gray'}}>Sign up</h2>
                            <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{ color: '#BB2D3B'}}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                                <Form.Group id="password" className="mb-4">
                                    <Form.Label style={{ color: '#BB2D3B'}} >Password</Form.Label>
                                    <Form.Control id="password" type="password" placeholder="Password" ref={passwordRef} required/>
                                </Form.Group>
                                <Form.Group id="password" className="mb-4">
                                    <Form.Label style={{ color: '#BB2D3B'}}>Confirm password</Form.Label>
                                    <Form.Control id="password" type="password" placeholder="Password" ref={confirmPasswordRef} required/>
                                    <Form.Text className="text-muted" style={{ display: `${passwordMatch ? 'block' : 'none'}`}}>
                                        Passwords do not match!
                                    </Form.Text>
                                </Form.Group>
                                <Button className="w-100" type="submit" variant="danger">Sign up
                                </Button>
                            </Form>
                        </Card.Body>
                            <div className="w-100 text-center" style={{ color: 'white'}}>
                                Already have an account? <Link to="/primary/login" style={{ color: 'red'}}>Log in</Link>
                            </div>
                        </Card>
                        
                        {/* </Tab> */}
                        {/* <Tab eventKey="signin" title="SignIn"> */}

                        {/* </Tab> */}
                    {/* </Tabs> */}
                </div>
            </div>
        </>
    );
};

export default PrimaryAuth;
