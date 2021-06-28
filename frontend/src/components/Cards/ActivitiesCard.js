import React, { Component, useState } from 'react'

import Aux from '../../hoc/Auxx';

const cinzel = "'Cinzel', serif";

const MyCard = (props) => {

    return <Aux>
        <div className="visit-container">
            <h1>{props.title}</h1>
            <div className="visit-image-container">
                <img src={props.image}/>
            </div>
            <div className="visit-container-text">
                <p>{props.description}</p>
            </div>
        </div>

        <main>
            {props.children}
        </main>
    </Aux>
}

export default MyCard;