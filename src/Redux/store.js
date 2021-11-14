import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './Reducers/userReducer';
import careMemberReducer from './Reducers/careMemberReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers( {
    user: userReducer,
    careMember: careMemberReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk));