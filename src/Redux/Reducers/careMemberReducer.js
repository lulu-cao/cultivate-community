import { careMemberConsts } from '../Consts/careMemberConsts';

const initialState = {
    careMember: {firstName: '', lastName: '', smsAddress: '', phone: ''},
    careMembers: [{firstName: 'Marge', lastName: 'Simpson', smsAddress: 'msimpson@txt.att.net', phone: '555-555-5555'}],
    loading: false
};

export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case careMemberConsts.REQUEST_CARE_MEMBERS_PENDING:
            return ({
                ...previousState,
                loading: true
            });
        case careMemberConsts.REQUEST_CARE_MEMBERS_SUCCESS:
            return ({
                ...previousState,
                loading: false,
                careMembers: action.payload
            });
        case careMemberConsts.ADD_CARE_MEMBER_PENDING:
            return ({
                ...previousState,
                loading: true
            });
        case careMemberConsts.ADD_CARE_MEMBER_SUCCESS:
            return ({
                ...previousState,
                loading: false
            });
        case careMemberConsts.UPDATE_CARE_MEMBER + '_PENDING':
            return ({
                ...previousState,
                loading: true
            });
        case careMemberConsts.UPDATE_CARE_MEMBER + '_FULFILLED':
            return ({
                ...previousState,
                loading: false,
                careMembers: action.payload.data
            });
        default: return (previousState);
    }
}