import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../Redux/Actions/userActions';

function Logout(props) {
    const navigate = useNavigate();
    useEffect(() => {
        props.logoutUser();
        navigate('/home'); 
        return null;
    })
    return null;
}

function mapStateToProps(reduxState) {
    return {
        username: reduxState.user.username,
        password: reduxState.user.password,
        isLoggedIn: reduxState.user.isLoggedIn
    }
}

export default connect(mapStateToProps, { logoutUser })(Logout);