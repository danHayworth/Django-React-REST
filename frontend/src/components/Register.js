import React, {useState} from 'react';
import axios from 'axios';


const Register =() =>{
    const[name, setName] = useState('');
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[password2, setPassword2] = useState('');    
    

    const handleSubmit = e => {
        e.preventDefault();
        if(password === password2 && name !== '' && password !== ''){
            axios({
                method: 'POST',
                url: 'http://localhost:8000/register/',
                contentType: 'application/json',
                data: {
                    name: name,
                    username: username,
                    email: email,
                    password: password
                }
            })
            document.querySelectorAll('.form-control').forEach(innerHtml => innerHtml.className += ' is-valid'); 
            setTimeout(() => {
                window.location.replace('/login');
            }, 3000);                           
        }else{
            document.querySelectorAll('.form-control').forEach(innerHtml => innerHtml.className += ' is-invalid');
        } 
          
    };
    const infoError = async function(){
        document.querySelectorAll('.form-control').forEach(innerHtml => innerHtml.className = 'form-control');
    }
        return (
            <div className="forms">
                <div className="card text-white bg-dark mb-3">
                    <h5 className="card-header text-center">Register</h5>
                    <div className="card-body bg-light">
                        <div className="container">
                            <div className="row">
                                <form className="col 12" onSubmit={handleSubmit} onClick={infoError}>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">account_circle</i>
                                        <input id="icon_name" type="text" className="validate form-control" onChange={e => setName(e.target.value)} autoComplete="off" />
                                        <label for="icon_name">Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">account_circle</i>
                                        <input id="icon_uername" type="text" className="validate form-control" onChange={e => setUsername(e.target.value)} autoComplete="off" />
                                        <label for="icon_username">Username</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">email</i>
                                        <input id="icon_email" type="email" className="validate form-control" onChange={e => setEmail(e.target.value)} autoComplete="off" />
                                        <label for="icon_email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">key</i>
                                        <input id="icon_password" type="password" className="validate form-control" onChange={e => setPassword(e.target.value)} autoComplete="off"/>
                                        <label for="icon_password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <i className="material-icons prefix text-black">key</i>
                                        <input id="icon_password1" type="password" className="validate form-control" onChange={e => setPassword2(e.target.value)} autoComplete="off" />
                                        <label for="icon_password1">Retype Password</label>
                                        <div className="valid-feedback">
                                            Welcome ! You are being redirected !
                                            <div className="progress teal accent-3">
                                                <div className="indeterminate"></div>
                                            </div>
                                        </div>
                                        <div className="invalid-feedback">
                                            Something is wrong, check your input !
                                        </div>
                                    </div>                     
                                </div>                               
                                <button className="btn waves-effect waves-light forms-btn black" type="submit" name="action">Send
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
export default Register;
