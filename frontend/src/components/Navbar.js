import  React from 'react';
import {Link} from 'react-router-dom';


const Navbar = (props) => {
    const logout = async() => {
        await fetch('http://localhost:8000/logout/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        window.location.replace('/');
    }

    let navigation;
    if(props.name === '' || props.name === undefined){
        navigation = (
            <>
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>                       
                </li>              
            </ul>
            <ul>
            <li className="nav-item">
                <Link className="nav-link navbar-item" to="/login/">Login</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link navbar-item" to="/register/">Register</Link>
            </li> 
            </ul>
            </> 
        )     
    }
    else {
        navigation = (
            <>
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>                       
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/posts/">Posts</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/users/">Users</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://localhost:8000/docs/">API docs</a>
                </li>  
            </ul>
            <ul>
            <li className="nav-item">
                <Link className="nav-link navbar-item" to="/logout/" onClick={logout}>Logout</Link>
            </li>
            <li className="nav-item accounts">
                    <i className="material-icons">account_circle</i>
                    <Link className="nav-link navbar-item" aria-current="page" to="/accounts/">{props.name}</Link>
                </li> 
            </ul>
            </>
        )
    }
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Posts & Users</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample03">                 
                    {navigation}                 
                </div>
                </div>
            </nav>
        );

    
}
export default Navbar;
