import  React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }
        axios({
            method: 'POST',
            url: 'http://localhost:8000/login/',
            contentType: 'application/json',
            data: data,
        })
        .then((response) => {
            const val = Object.values(response.data);
            const key = Object.keys(response.data);
            console.log(response);
            window.localStorage.setItem('token', val);
            document.cookie = [key + '=' + val];
            window.location.href="/";
        },
        (error) => {
            console.log(error);
        })
    };
    
    render() {
        return (
            <div className="container">
                <div classNameName="row">
                    <h3> Login form </h3>
                    <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_prefix" type="email" className="validate" onChange={e => this.email = e.target.value} />
                        <label for="icon_prefix">Email</label>
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">key</i>
                        <input id="icon_telephone" type="password" className="validate" onChange={e => this.password = e.target.value} />
                        <label for="icon_telephone">Password</label>
                        </div>                    
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Login
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}