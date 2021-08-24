import  React, { useState } from 'react';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const submit = async (e) =>{
        e.preventDefault();
        await fetch('http://localhost:8000/login/',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        window.location.replace('/'); 
    };
             
    return (
        <div className="forms">
            <div className="card text-white bg-dark mb-3">
                <h5 className="card-header">Login form</h5>
                <div className="card-body bg-light">
                    <div className="container">
                        <div className="row">
                            <form className="col s12" onSubmit={submit}>
                            <div className="row">
                                <div className="input-field col12">
                                <i className="material-icons prefix text-black">email</i>
                                <input id="icon_prefix" type="email" className="validate" onChange={e => setEmail(e.target.value)} autoComplete="off"/>
                                <label for="icon_prefix">Email</label>
                                </div>
                                <div className="input-field col12">
                                <i className="material-icons prefix text-black">key</i>
                                <input id="icon_telephone" type="password" className="validate" onChange={e => setPassword(e.target.value)} autoComplete="off" />
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
export default Login