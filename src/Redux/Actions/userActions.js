import { userConsts } from '../Consts/userConsts';

// Request all user data
export function validateUser(user, password) {
    return function (dispatch, getState) {
        const storedUser = getState().user.user.username;
        const storedPassword = getState().user.user.password;
        if(user === storedUser && password === storedPassword) {
            console.log('action success')
            dispatch(validateUserSuccess())
        } else {
            console.log('action failed')
            dispatch(validateUserFailed)
        }
    }
}

// function validateUserPending() {
//     return {
//         type: userConsts.VALIDATE_USER_PENDING
//     };
// }

function validateUserSuccess() {
    return {
        type: userConsts.VALIDATE_USER_SUCCESS
    };
}

function validateUserFailed() {
    return {
        type: userConsts.VALIDATE_USER_FAILED
    };
}
