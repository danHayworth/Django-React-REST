import  React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Register from './components/Register';
import './App.css';

const App =()=> {
  
  const [name, setName] = useState('');

  useEffect(() => {
    (
        async () => {
            const response = await fetch('http://localhost:8000/user', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            });
            const content = await response.json();
            console.log(content.name)
            setName(content.name);
        }
    )();
});
    return (
      <div className="App">       
        <Router>
        <Navbar name = {name} setName = {setName}/>   
          <Switch>
            <Route exact path='/' component={()=> <Home name={name}/>}/>
            <Route exact path='/login/' component={()=> <Login setName={setName}/>}/>
            <Route exact path='/posts/' component={Posts}/>
            <Route exact path='/register/' component={Register}/>
          </Switch>
        </Router>
      </div>
    );      
}
export default App;
  


