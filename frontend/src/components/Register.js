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
        if(data.password === data.password1){
            axios({
                method: 'POST',
                url: 'http://localhost:8000/register/',
                contentType: 'application/json',
                data: {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
            })
            window.location.replace('/login/')
        } 
          
    };
    render(){
        return (
            <div className="forms">
                <div class="card text-white bg-dark mb-3">
                    <h5 class="card-header">Registration form</h5>
                    <div class="card-body bg-light">
                        <div className="container">
                            <div className="row">
                                <form className="col 12" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">account_circle</i>
                                        <input id="icon_name" type="text" className="validate" onChange={e => this.name = e.target.value} autoComplete="off" />
                                        <label for="icon_name">Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">email</i>
                                        <input id="icon_email" type="email" className="validate" onChange={e => this.email = e.target.value} autoComplete="off"/>
                                        <label for="icon_email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">key</i>
                                        <input id="icon_password" type="password" className="validate" onChange={e => this.password = e.target.value} autoComplete="off"/>
                                        <label for="icon_password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">key</i>
                                        <input id="icon_password1" type="password" className="validate" onChange={e => this.password1 = e.target.value} autoComplete="off"/>
                                        <label for="icon_password1">Password</label>
                                    </div>                     
                                </div>
                                <button className="btn waves-effect waves-light forms-btn" type="submit" name="action">Send
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
