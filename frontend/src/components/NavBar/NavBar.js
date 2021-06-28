import React, { Component, useState } from 'react'
import {useOutsideAlerter} from "../../extra/outsideAlerter.js";
import towerWhite from '../../Images/logo-white.png'

import Aux from '../../hoc/Auxx';
import classes from './NavBar.css';

const NavBar = (props) => {
    
    const {visible, setVisible, ref} = useOutsideAlerter(false);

    return <Aux>
        <div id="navBar">
            <a class="navbar-logo-white" href="/"><img src={towerWhite}></img></a>
            <div id="homeButton" className="navbarButtons-container">
                <a className="navbarButtons" href="/">Home</a>
            </div>
            <div id="historyButton" className="navbarButtons-container">
                <a className="navbarButtons" href="/history">Short History</a>
            </div>
            <div id="placesButton" className="navbarButtons-container">
                <div onClick={() => {setVisible('best_places');}} className="navbarButtons">Best Places</div>
                {visible === "best_places" && <div id="placesDropdown" className={"dropdown"} ref={ref}>
                    <div className="dropdown-option"><a id="places1" href="/eatandcoffee">Best places to eat or drink a coffee</a></div>
                    <div className="dropdown-option"><a id="places3" href="/visit">Best places to visit</a></div>
                    <div className="dropdown-option"><a id="places4" href="/sleep">Best places to spend a night</a></div>
                </div>}
            </div>
            <div id="activitiesButton" className="navbarButtons-container">
                <a className="navbarButtons" href="/activities">Activities</a>
            </div>
            <div id="loginButton" className="navbarButtons-container">
                <a className="navbarButtons" href="/login">Log in</a>
            </div>
            <div id="signupButton" className="navbarButtons-container">
                <a className="navbarButtons" href="/signup">Sign up</a>
            </div>
        </div>

        <main>
            {props.children}
        </main>
    </Aux>
};

export default NavBar;