import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';

import Aux from '../../hoc/Auxx';
import classes from './Activities.css';
import MyCard from '../Cards/ActivitiesCard'

function importAll(r) {
    let image = {};
    r.keys().map((item, index) => { image[item.replace('./', '')] = r(item); });
    return image;
}

const image = importAll(require.context('./../../Images/Activities', false, /\.png/));

const Activities = (props) => {

    const [state, setState] = useState({ places: [] });

    useEffect(() => {
        getActivities();
    })

    const getActivities = () => {
        axios.get('http://localhost:4000/activities') // this will be modified
            .then((res) => {
                const data = res.data;
                //console.log(data);

                setState({ places: data });

                //console.log('Data has been received!');
            })
            .catch(() => {
                console.log("Naspa de tine");
            })
    }

    return <Aux>
        <div className="visit-page">
            {state.places.map(item => <MyCard image={image[item.mainImage].default} title={item.title} description={item.mainDescription} />)}
        </div>


        <main>
            {props.children}
        </main>
    </Aux>
};

export default Activities;