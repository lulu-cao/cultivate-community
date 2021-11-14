import React from 'react';
import { connect } from 'react-redux';
import AddCareMember from './AddCareMember';

function ManageCareTeam(props) {
    return (
        <div>
            Care Team list goes here.
            <AddCareMember />
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