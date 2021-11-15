import { userConsts } from '../Consts/userConsts';

// Validate user login credentials
export function validateUser(user, password) {
    return function (dispatch, getState) {
        const storedUser = getState().user.user.username;
        const storedPassword = getState().user.user.password;
        if(user === storedUser && password === storedPassword) {
            console.log('action success')
            dispatch(validateUserSuccess())
            return true
        } else {
            console.log('action failed')
            dispatch(validateUserFailed)
            return false
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

// Log user out
export function logoutUser() {
    return function (dispatch) {
        dispatch(logoutUserSuccess())
    }
}

function logoutUserSuccess() {
    return {
        type: userConsts.LOGOUT_USER_SUCCESS
    };
}
