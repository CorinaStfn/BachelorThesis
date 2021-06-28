import React, { Component, useState } from 'react'
import axios from 'axios'

import NavBar from '../NavBar/NavBar';
import Aux from '../../hoc/Auxx';
import classes from './SignUpPage.css';
import towerBlack from '../../Images/logo-black.png'
import { useOnLabelAlerter } from "../../extra/onLabelAlerter.js";


const SignUpPage = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangePasswordConf = (e) => {
        setPassword(e.target.value);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        const registered = { firstName, lastName, username, email, password }

        axios.post('http://localhost:4000/signup', registered)
            .then(res => console.log(res.data))
    }



    
    return <Aux>
        <div id="signUpContainer">
            <div className="blur">
                <div className="container">
                    <div className="signUp-descr inline">
                        <div className="signUp-tower"><img src={towerBlack}></img></div>
                        <p className="signUp-text">
                            Sighisoara is definitely worth seeing and spending at least one night in.<br></br>
                            Create an account so you can find out which are the best places to eat, drink a coffe, visit or spend a night.
                        </p>
                    </div>
                    <form id="signUpForm" className="inline" onSubmit={onSubmit}>
                        <p className="signUp-title">Sign Up</p>
                        <div className="input-div">
                            <input type="text" onChange={onChangeFirstName} placeholder="First Name" className="firstName input"></input>
                        </div>
                        <div className="input-div">
                            <input type="text" onChange={onChangeLastName} placeholder="Last Name" className="lastName input"></input>
                        </div>
                        <div class="input-div">
                            <input type="text" onChange={onChangeUsername} placeholder="Username" className="userName input"></input>
                        </div>
                        <div class="input-div">
                            <input type="email" onChange={onChangeEmail} placeholder="Email" className="email input"></input>
                        </div>
                        <div class="input-div">
                            <input type="password" onChange={onChangePassword} placeholder="Password" className="password input"></input>
                        </div>
                        <div class="input-div">
                            <input type="password" onChange={onChangePasswordConf} placeholder="Password Confirmation" className="password input"></input>
                        </div>
                        <input type="submit" className="signUp-submit-button" value=""></input>
                    </form>
                </div>
            </div>
        </div>

        <main>
            {props.children}
        </main>
    </Aux>
};

export default SignUpPage;