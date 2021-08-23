import axios from 'axios';
import  React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Register from './components/Register';

const App =()=> {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const data = fetch('http://localhost:8000/user/')
  .then(function (response) {
    console.log(response);
  })
  console.log(data);

    return (
      <div className="App">
          
        <Router>
        <Navbar />   
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login/' component={Login}/>
            <Route exact path='/posts/' component={Posts}/>
            <Route exact path='/register/' component={Register}/>
          </Switch>
        </Router>
      </div>
    );
       
}
export default App;
  


