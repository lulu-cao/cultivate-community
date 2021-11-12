import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { requestUserData } from '../Redux/Actions/userActions';

function PrivateRoutes({component: Component, ...rest }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestUserData());
    },[dispatch])
    if (!this.props.isLoggedIn) {
        return (<Navigate to = '/logout' />)
    }
    return 
}

function mapStateToProps(reduxState) {
    return {
        isLoggedIn: reduxState.user.isLoggedIn
    }
}

export default connect(mapStateToProps)(PrivateRoutes);