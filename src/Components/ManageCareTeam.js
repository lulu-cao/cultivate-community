import React from 'react';
import { connect } from 'react-redux';

function ManageCareTeam(props) {
    return (
        <div>
            Care Team list goes here.
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

export default connect(mapStateToProps)(ManageCareTeam);