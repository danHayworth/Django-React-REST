import React, { Component } from 'react';
import axios from 'axios';
export default class Register extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            name: this.name,
            email: this.email,
            password: this.password,
            password1: this.password1
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
    render(){
        return (
            <div className="forms">
                <div class="card text-white bg-dark mb-3">
                    <h5 class="card-header">Registration form</h5>
                    <div class="card-body bg-light">
                        <div className="container">
                            <div classNameName="row">
                                <form className="col 12" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">account_circle</i>
                                        <input id="icon_name" type="text" className="validate" onChange={e => this.name = e.target.value} autocomplete="off" />
                                        <label for="icon_name">Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">email</i>
                                        <input id="icon_email" type="email" className="validate" onChange={e => this.email = e.target.value} autocomplete="off"/>
                                        <label for="icon_email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">key</i>
                                        <input id="icon_password" type="password" className="validate" onChange={e => this.password = e.target.value} autocomplete="off"/>
                                        <label for="icon_password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">key</i>
                                        <input id="icon_password1" type="password" className="validate" onChange={e => this.password1 = e.target.value} autocomplete="off"/>
                                        <label for="icon_password1">Password</label>
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
