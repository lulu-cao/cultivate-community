import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { validateUser } from '../Redux/Actions/userActions';

function Login(props) {
    // const history = useNavigate();
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const handleLogin = (usernameInput, passwordInput) => {
        props.validateUser(usernameInput, passwordInput)
    }

    return (
        <div>
            <input type="text" name="usernameInput" value={usernameInput} placeholder="Enter username" onChange={e => setUsernameInput(e.target.value)} ></input>
            <input type="password" name="passwordInput" value={passwordInput} placeholder="Enter password" onChange={e => setPasswordInput(e.target.value)}></input>
            <button onClick={() => {handleLogin(usernameInput, passwordInput)}}>
                Login
            </button>
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