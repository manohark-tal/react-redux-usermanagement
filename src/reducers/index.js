import {combineReducers}from 'redux'
import authReducer from './auth.reducer'
import userControlReducer from './userManagement.reducer'
export default combineReducers({
    auth:authReducer,
    userControl:userControlReducer
})