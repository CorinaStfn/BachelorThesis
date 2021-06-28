import React, { Component, useState, useEffect} from 'react';
import axios from 'axios';

import Card from '../../Cards/VisitCard';

import Aux from '../../../hoc/Auxx';

import MapContainer from './../../Tests/TestMaps';

function importAll(r) {
    let image = {};
    r.keys().map((item, index) => { image[item.replace('./', '')] = r(item); });
    return image;
}

const image = importAll(require.context('./../../../Images/Visit', false, /\.png/));


const Visit = (props) => {
    const [state, setState] = useState({places: []});
 
    useEffect(() => {
        getVisitPlaces();
    })

    const getVisitPlaces = () => {
        axios.get('http://localhost:4000/visit') // this will be modified
            .then((res) => {
                const data = res.data;
                //console.log(data);

                setState({places: data});

                //console.log('Data has been received!');
            })
            .catch(() => {
                console.log("Naspa de tine");
            })
    }
/*
    const titles = [state.title];
    console.log("this is the title:" + titles);
*/


    return <Aux>
        <div className='card-container'>
            {state.places.map(item => <Card image = {image[item.mainImage].default} title = {item.title} description = {item.mainDescription} />)}
        </div>

        <main>
            {props.children}
        </main>
    </Aux>
};

export default Visit;