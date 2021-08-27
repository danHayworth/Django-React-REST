import  React, { useState } from 'react';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const submit = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:8000/login/',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        }).then(response => response.status)
        if (response === 200 && email !== '' && password !== ''){
            document.querySelectorAll('.form-control').forEach(innerHtml => innerHtml.className += ' is-valid');          
            setTimeout(() => {
                window.location.replace('/');
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
                <h5 className="card-header text-center ">Sign in</h5>
                <div className="card-body bg-light">
                    <div className="container">
                        <div className="row">
                            <form className="col s12" onSubmit={submit} onClick={infoError}>
                            <div className="row">                                
                                <div className="input-field col12">
                                <i className="material-icons prefix text-black">email</i>
                                <input id="icon_prefix" type="email" className="validate form-control" onChange={e => setEmail(e.target.value)} autoComplete="off" />
                                <label htmlFor="icon_prefix">Email</label>                           
                                </div>
                                <div className="input-field col12">
                                <i className="material-icons prefix text-black">key</i>
                                <input id="icon_telephone" type="password" className="validate form-control" onChange={e => setPassword(e.target.value)} autoComplete="off" />
                                <label htmlFor="icon_telephone">Password</label>
                                <div className="valid-feedback">
                                    Welcome ! You are being redirected !                                   
                                    <div className="progress teal accent-3">
                                        <div className="indeterminate"></div>
                                    </div>
                                </div>
                                <div className="invalid-feedback">
                                    Something is wrong! Check your input!
                                </div>
                                </div>                    
                            </div>      
                            <button className="btn waves-effect waves-light forms-btn black" type="submit" name="action">Login
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