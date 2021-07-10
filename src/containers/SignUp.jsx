import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { signupUser } from '../store/actions'
import { useDispatch } from 'react-redux'

function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const dispatch = useDispatch();

    const history =useHistory();
    const signup_user = () => {
        let user = {
            username,
            email,
            password,
            address
        }
        dispatch(signupUser(user,history))
    }
    return (
        <>
            <Header />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card login_card p-4">
                            <h1>Signup</h1>
                            <div className="mb-3">
                                <label htmlfor="exampleFormControlInput1" className="form-label">Username</label>
                                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlfor="exampleFormControlInput1" className="form-label">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleFormControlInput3" placeholder="Enter your password" />
                            </div>
                            <div className="mb-3">
                                <label htmlfor="inputAddress" className="form-label">Address</label>
                                <input onChange={(e) => setAddress(e.target.value)} type="text" value={address} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="d-grid gap-2">
                                <button onClick={signup_user} className="btn btn-primary" type="button">Signup</button>
                            </div>
                            <div>
                                <span>Don't have an Account?</span>
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SignUp
