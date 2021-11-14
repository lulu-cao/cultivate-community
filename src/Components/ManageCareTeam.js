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
        firstName: reduxState.careMember.firstName,
        lastName: reduxState.careMember.lastName,
        smsAddress: reduxState.careMember.smsAddress,
        loading: reduxState.careMember.loading
    }
}

export default connect(mapStateToProps)(ManageCareTeam);