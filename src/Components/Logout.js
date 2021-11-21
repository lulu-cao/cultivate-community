import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../Redux/Actions/userActions';

function Logout(props) {
    const navigate = useNavigate();
    useEffect(() => {
        props.logoutUser();
        // I changed it to homeGuest; feel free to change it back to loginGuest
        navigate('/homeGuest');
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

// Currently, the html files design the log out function as returning to home-guest page;
// not sure whether the codes here would have the same effect but feel free to change mine --Lulu