import React from 'react';
import { connect } from 'react-redux';
import AddCareMember from './AddCareMember';
import CareMember from './CareMember';

function ManageCareTeam(props) {
    const mappedCareMembers = props.careMembers.map((member) => {
        return <CareMember key={member.smsAddress} member={member} />
    })
    return (
        <div>
            {!props.careMembers ?
                (
                    <p>
                        Your Care Team contact list is empty. Click below to set up your Care Team now.
                    </p>
                ):
                (
                    <div>
                        {mappedCareMembers}
                    </div>
                )
            }
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