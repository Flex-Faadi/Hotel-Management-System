import React, { useState } from 'react'
import { Form, Button, Container, Navbar, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useDispatch } from 'react-redux'
import {loginUser} from "../store/actions"
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history=useHistory()
    const dispatch = useDispatch();

    // const history =useHistory();

    const signin_user = () => {
        let user = {
            email,
            password
        }
        dispatch(loginUser(user,history))
        console.log(user)
    }
    return (
        <>
            <Header />
            <div className="container bg-danger">
                <Card className="p-5 my-5">
                    <h1 className="text-center">Login Form</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={(e) => setPassword(e.target.value)} value={password}
                                type="password" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={signin_user} variant="primary" type="button">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </div>
            <Footer />
        </>
    )
}

export default Login
