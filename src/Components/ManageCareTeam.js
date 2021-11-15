import React from 'react';
import { connect } from 'react-redux';
import AddCareMember from './AddCareMember';
import CareMember from './CareMember';

function ManageCareTeam(props) {
    const mappedCareMembers = props.careMembers.map((member) => {
        return <CareMember member={member} />
    })
    return (
        <div>
            {mappedCareMembers}
            <AddCareMember />
        </div>
    )
}

function mapStateToProps(reduxState) {
    return {
        careMembers: reduxState.careMember.careMembers,
        loading: reduxState.careMember.loading
    }
}

export default connect(mapStateToProps)(ManageCareTeam);