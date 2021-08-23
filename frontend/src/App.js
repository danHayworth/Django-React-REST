import  React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';


export default class App extends Component {
  state = {
    token: localStorage.getItem('token')
  }
 
  render() {
    if (this.state.token !== null) {
      return (
        <>
        <Navbar />
        <h2>{this.state.token}</h2>
        </>
      )
    }else {
      return (
        <div className="App">       
          <Router>
            <Switch>
              <Route exact path='/login' component={Login}/>
            </Switch>
          </Router>
          Hi
        </div>
      );
    }
    
  }
  
}

