import { careMemberConsts } from '../Consts/careMemberConsts';

// Request all care team members
export function requestCareMembers() {
    return function (dispatch) {
        dispatch(requestCareMembersPending());
        axios.get(`${process.env.REACT_APP_API_PROTOCOL}${process.env.REACT_APP_API_SERVER}:${process.env.REACT_APP_API_PORT}/api/v1/care-members`, {headers: authHeader()})
        .then(res => {
            dispatch(requestCareMembersSuccess(res.data))
        })
        .catch(err => {
            console.log(err);
        });
    }
    
}
function requestCareMembersPending() {
    return {
        type: careMemberConsts.REQUEST_CARE_MEMBERS_PENDING
    };
}
function requestCareMembersSuccess(data) {
    return {
        type: careMemberConsts.REQUEST_CARE_MEMBERS_SUCCESS,
        payload: data
    };
}

// Create a new care team member
export function addCareMemberData() {
    return function (dispatch, getState) {
        const { careMember } = getState().careMember;
        let formData = new FormData();

        formData.append('first_name', careMember.first_name)
        formData.append('last_name', careMember.last_name)
        formData.append('sms_address', careMember.sms_address)
        dispatch(addCareMemberPending());

        return axios.post(`${process.env.REACT_APP_API_PROTOCOL}${process.env.REACT_APP_API_SERVER}:${process.env.REACT_APP_API_PORT}/api/v1/care-members`, formData,
        {
            headers: {
                ...authHeader(),
                'content-type': 'multipart/form-data'
            }
        })
        .then(() => {
            dispatch(addCareMemberSuccess())
        })
    }
}
function addCareMemberPending() {
    return {
        type: careMemberConsts.ADD_CARE_MEMBER_PENDING
    };
}
function addCareMemberSuccess() {
    return {
        type: careMemberConsts.ADD_CARE_MEMBER_SUCCESS
    };
}

// Update a care team member by careMemberId
export function updateCareMemberData() {
    return function (dispatch, getState) {
        const { careMember } = getState().careMember;
        let formData = new FormData();

        formData.append('first_name', careMember.first_name)
        formData.append('last_name', careMember.last_name)
        formData.append('sms_address', careMember.sms_address)
        dispatch(updateCareMemberPending());
        
        return axios.put(`${process.env.REACT_APP_API_PROTOCOL}${process.env.REACT_APP_API_SERVER}:${process.env.REACT_APP_API_PORT}/api/v1/care-members/${careMember.member_id}`, formData,
        {
            headers: {
                ...authHeader(),
                'content-type': 'multipart/form-data'
            }
        })
        .then(() => {
            dispatch(updateCareMemberSuccess())
        })
        .catch(err => {
            console.log(err);
        });
    }
}
function updateCareMemberPending() {
    return {
        type: careMemberConsts.UPDATE_CARE_MEMBER_PENDING
    };
}
function updateCareMemberSuccess() {
    return {
        type: careMemberConsts.UPDATE_CARE_MEMBER_SUCCESS
    };
}