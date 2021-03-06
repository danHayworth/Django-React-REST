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
        document.cookie.replace('jwt', '')
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
            <li className="nav-item">
                <a className="nav-link navbar-item" _blank="true" href="http://localhost:8000/admin">Admin</a>
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
                    <a className="nav-link " aria-current="page" href="http://localhost:8000/docs/" data-toggle="tooltip" data-placement="bottom" title="This will take you to a different web app.">API docs</a>
                </li>  
            </ul>
            <ul>
            <li className="nav-item">
                <a className="nav-link navbar-item" _blank="true" href="http://localhost:8000/admin">Admin</a>
            </li> 
            <li className="nav-item">
                <Link className="nav-link navbar-item" to="/logout/" onClick={logout}>Logout</Link>
            </li>
            <li className="nav-item accounts">
                    <i className="material-icons">account_circle</i>
                    <Link className="nav-link navbar-item" aria-current="page" to={"/account/" + props.id}>{props.name}</Link>
                </li> 
            <li className="nav-item">
                <a className="btn-floating btn-large waves-effect waves-light turqoise" type="button" href="/publish">                                   
                    <p className="addingBtn ">+</p>   
                </a>                               
            </li>
            </ul>
            </>
        )
    }
        return (
            <div className="header">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Django and React API</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample03">                 
                    {navigation}                 
                </div>
                </div>
            </nav>
            </div>
        );

    
}
export default Navbar;
