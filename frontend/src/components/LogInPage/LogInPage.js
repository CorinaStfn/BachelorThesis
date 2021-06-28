import React, { Component, useState } from 'react'
import axios from 'axios'

import NavBar from '../NavBar/NavBar';
import Aux from '../../hoc/Auxx';
import classes from './LogInPage.css';
import towerBlack from '../../Images/logo-black.png'
import { useOnLabelAlerter } from "../../extra/onLabelAlerter.js";


const LogInPage = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const registered = { email, password }

        axios.post('http://localhost:4000/login', registered)
            .then(res => console.log(res.data))
    }

    return <Aux>
        <div id="logInContainer">
            <div className="blur">
                <div class="container">
                    <form id="logInForm" onSubmit={onSubmit}>
                        <p className="logIn-title">Log in</p>
                        <div class="input-div">
                            <input type="email" onChange={onChangeEmail} placeholder="Email" className="email input"></input>
                        </div>
                        <div class="input-div">
                            <input type="password" onChange={onChangePassword} placeholder="Password" className="password input"></input>
                        </div>
                        <input type="submit" className="logIn-submit-button" value="Log In"></input>
                    </form>
                </div>
            </div>
        </div>

        <main>
            {props.children}
        </main>
    </Aux>
};

export default LogInPage;