import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { validateUser } from '../Redux/Actions/userActions';
import LoginNav from './LoginNav';
import Footer from './Footer';
import '../html-css/css/login-guest.css'

function Login(props) {
    const navigate = useNavigate();
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const handleLogin = (usernameInput, passwordInput) => {
        const isValidUser = props.validateUser(usernameInput, passwordInput);
        if(isValidUser) {
            navigate('/resource')
        } else {
            const msgContainer = document.getElementById('msg-container');
            msgContainer.style.color = 'red';
            msgContainer.innerHTML ='Login failed. Verify the username and password you entered are correct.';
        }    
    }

    return (
        <div>
            <LoginNav />
            <main className="main" role="main">
                <div className="bg-white">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters vh-100">
                            <div className="col-12 col-sm-6 order-sm-2 bg-white d-flex justify-content-center align-items-center bg-overlay-teal">
                                <img src={process.env.PUBLIC_URL + "/images/cover.jpg"} className="img-fluid img-cover" alt="Cultivate Community" />
                            </div>
                            <div className="col-12 col-sm-6 order-sm-1 bg-light d-flex position-relative justify-content-center align-items-center">
                                <div className="p-3 p-md-4 p-lg-8 w-100">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="display-4 mb-2">Welcome!</h2>    
                                        <div className="m-sm-4">
                                            <div id="msg-container">
                                                {/* This is the message container for rendering login errors */}
                                            </div>
                                            <form>
                                                <div className="form-group">
                                                    <input className="form-control form-control-lg" type="text" name="usernameInput" value={usernameInput} placeholder="Username" onChange={e => setUsernameInput(e.target.value)} />
                                                </div><br/>
                                                <div className="form-group">
                                                    <input className="form-control form-control-lg" type="password" name="passwordInput" value={passwordInput} placeholder="Password" onChange={e => setPasswordInput(e.target.value)} />
                                                </div>
                                                <div className="text-center mt-3">
                                                    <span onClick={() => {handleLogin(usernameInput, passwordInput)}} className="btn btn-lg btn-success">Log In</span><br/><br/>
                                                    <p>New user? 
                                                        <span>
                                                            <Link to="/sign-up" className="nav-link" aria-current="page">
                                                                Create an account
                                                            </Link>
                                                        </span>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

function mapStateToProps(reduxState) {
    return {
        username: reduxState.user.username,
        password: reduxState.user.password,
        isLoggedIn: reduxState.user.isLoggedIn
    }
}

export default connect(mapStateToProps, { validateUser })(Login);