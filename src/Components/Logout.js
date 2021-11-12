import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../Redux/Actions/userActions';

function Logout(props) {
    props.logoutUser();
    (<Navigate to = '/logout' />)
}

function mapStateToProps(reduxState) {
    return {
        username: reduxState.user.username,
        password: reduxState.user.password,
        isLoggedIn: reduxState.user.isLoggedIn
    }
}

export default connect(mapStateToProps, { logoutUser })(Logout);