import  React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Posts & Users</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="posts/">Posts</a>
                    </li>    
                    </ul>
                    <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="login/">Login</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="register/">Register</a>
                    </li> 
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
    
}
