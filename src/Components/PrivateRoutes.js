import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

function PrivateRoutes({component: Component, ...rest }) {
    
    if (!this.props.isLoggedIn) {
        return (<Navigate to = '/logout' />)
    }
    return <Route {...rest} render = {props => (
        <Component {...props} />
    )}/>
}

function mapStateToProps(reduxState) {
    return {
        isLoggedIn: reduxState.user.isLoggedIn
    }
}

export default connect(mapStateToProps)(PrivateRoutes);