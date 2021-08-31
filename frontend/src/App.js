import  React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Post from './components/Post';
import Publish from './components/Publish';
import Account from './components/Account';
import Register from './components/Register';
import './App.css';

const App =()=> {
  
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    (
        async () => {
            const response = await fetch('http://localhost:8000/user', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            });
            const content = await response.json();
            setName(content.name);
            setId(content.id);
        }
    )();
  }, [name, id]);
    return (
      <div className="App main" onLoad={() => setName()}>       
        <Router>
        <Navbar name = {name} id = {id}/>   
          <Switch>
            <Route exact path='/' component={()=> <Home name={name}/>}/>
            <Route exact path='/login' component={()=> <Login setName={setName}/>}/>
            <Route exact path='/posts' component={Posts}/>
            <Route exact path='/posts/:id' component={Post}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/account/:id' component={()=> <Account id={id} />}/>
            <Route exact path='/publish' component={()=> <Publish id={id} />}/>
          </Switch>
        </Router>
      </div>
    );      
}
export default App;
  


