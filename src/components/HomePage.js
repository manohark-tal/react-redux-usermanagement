import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {loginUser} from '../actions/auth.actions'
import LoginForm from './LoginForm';


const HomePage=(props)=> {
    console.log(props)
    let content=props.loggedIn?<p>Hi {props.user.firstName}</p>:<LoginForm submitAction={props.loginUser}></LoginForm>
    return content
}
 const mapStateToProps=(state)=>{
     return state.auth;
 }

 const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loginUser},dispatch)
 }
 export default connect(mapStateToProps,mapDispatchToProps)(HomePage);