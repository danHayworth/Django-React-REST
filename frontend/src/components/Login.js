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
            document.cookie = [key + '=' + val];
            window.location.href="/";
        },
        (error) => {
            console.log(error);
        })
    };
    
    render() {
        return (
            <div className="forms">
                <div class="card text-white bg-dark mb-3">
                    <h5 class="card-header">Login form</h5>
                    <div class="card-body bg-light">
                        <div className="container">
                            <div classNameName="row">
                                <form className="col s12" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="input-field col12">
                                    <i className="material-icons prefix text-black">email</i>
                                    <input id="icon_prefix" type="email" className="validate" onChange={e => this.email = e.target.value} autocomplete="off"/>
                                    <label for="icon_prefix">Email</label>
                                    </div>
                                    <div className="input-field col12">
                                    <i className="material-icons prefix text-black">key</i>
                                    <input id="icon_telephone" type="password" className="validate" onChange={e => this.password = e.target.value} autocomplete="off" />
                                    <label for="icon_telephone">Password</label>
                                    </div>                    
                                </div>      
                                <button className="btn waves-effect waves-light forms-btn" type="submit" name="action">Login
                                        <i className="material-icons right">send</i>
                                </button>                                  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}