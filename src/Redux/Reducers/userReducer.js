import { userConsts } from '../Consts/userConsts';

const initialState = {
    user: {firstName: 'Frodo', lastName: 'Baggins', username: 'fbaggins', password: 'ring'},
    isLoggedIn: false
};

export default function reducer(previousState = initialState, action) {
    switch(action.type) {
        case userConsts.VALIDATE_USER_PENDING:
            return ({
                ...previousState,
                isLoggedIn: false,
                loginFailed: false
            });
        case userConsts.VALIDATE_USER_SUCCESS:
            return ({
                ...previousState,
                isLoggedIn: true,
                user: action.payload
            });
        case userConsts.VALIDATE_USER_FAILED:
            return ({
                ...previousState,
                isLoggedIn: false,
                loginFailed: true
            });
        case userConsts.LOGOUT_USER_SUCCESS:
            return ({
                ...previousState,
                isLoggedIn: false,
                loginFailed: false
            });
        default: return (previousState);
    }
}