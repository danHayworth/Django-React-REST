import axios from 'axios';
import  React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Posts from './components/Posts';

export default class App extends Component {
  
  componentDidMount = () => {
    axios.get('user').then(res => {
      this.setState({
        user: res.data
      });
    },
    err => {
      console.log(err)
    }
    )
  };
  render() { 
      return (
        <div className="App">
        <Navbar />       
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/posts' component={Posts}/>
            </Switch>
          </Router>
        </div>
      );
    }   
}
  


