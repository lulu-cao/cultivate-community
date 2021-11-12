import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './Reducers/userReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers( {
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk));