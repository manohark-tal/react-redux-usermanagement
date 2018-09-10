import React, { Component } from 'react';
import './App.css';
import HomePage from '../HomePage';
import NavBar from '../NavBar';
import {Route,Switch}from 'react-router-dom'
import AddUserForm from '../AddUserForm'
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/add" component={AddUserForm}></Route>
        <Route exact path="/edit" component={AddUserForm}></Route>
      </Switch>
      </div>
    );
  }
}

export default App;
