import React, { useState, useRef } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './Auth.scss';
import { makeLoginCall } from './Apicalls';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const navigate = useNavigate();
    const toast = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const BASE_URL = "localhost:9091/api/v1/auth/";

    const show = (severity, detail) => {
        toast.current.show({ severity: severity, summary: "Server Response", detail: detail });
    };

    const submitLogin = async () => {
        const loginForm = {
            username: username,
            password: password
        }
        const res = await makeLoginCall(loginForm);

        if (res.status == 200) {
            show('success', res.message);
            navigate('home');
        }
        else if (res.status == 404) show('warn', res.message);
        else if (res.status == 400) show('info', res.message);
        else show('error', res.message);

    }

    const submitSignup = () => {
        const signupForm = {
            name: name,
            email: email,
            phone: phone,
            password: password
        }
        console.log(`signup form ${JSON.stringify(signupForm)}`);
    }

    return (
        <div className='Auth'>
            <Toast ref={toast} />
            {isLoggedIn && <div className="AuthLogin">
                <img className='AuthLoginImage' src="https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?size=626&ext=jpg" alt="" />
                <div className="Login">
                    <p className='LoginText'>Welcome Back!</p>
                    <span className="p-input-icon-left">
                        <i className="pi pi-user" />
                        <InputText value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="Email/Phone" />
                    </span>
                    <span className="p-input-icon-left">
                        <i className="pi pi-lock" />
                        <InputText value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" type='password' />
                    </span>
                    <Button className='LoginButton' onClick={submitLogin} label="Submit" icon="pi pi-check" />
                    <p className='GoToSignup'>Don't have account?<span className='GoToSignupSpan' onClick={() => { setIsLoggedIn(false) }} >signup</span> </p>
                </div>
            </div>}
            {!isLoggedIn && <div className="AuthSignup">
                <span className="p-input-icon-left">
                    <i className="pi pi-user" />
                    <InputText value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                </span>
                <span className="p-input-icon-left">
                    <i className="pi pi-envelope" />
                    <InputText value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                </span>
                <span className="p-input-icon-left">
                    <i className="pi pi-phone" />
                    <InputText value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone" />
                </span>
                <span className="p-input-icon-left">
                    <i className="pi pi-lock" />
                    <InputText value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" type='password' />
                </span>
                <Button className='LoginButton' onClick={submitSignup} label="Submit" icon="pi pi-check" />
                <p className='GoToSignup'>Back To Login?<span className='GoToSignupSpan' onClick={() => { setIsLoggedIn(true) }} >login</span> </p>
            </div>}
        </div>
    )
}

export default Auth