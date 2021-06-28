import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import Aux from '../../hoc/Auxx';
import classes from './TestMaps.css';

const mapStyles = {
    width: '50%',
    height: '50%',
}
export class MapContainer extends Component {

    render() {
        return ( <Aux>
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 46.754894147238666, lng: 23.58779878683067}}
            />
    </Aux>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBZ7IBZJSafYh3Cp3fBrFaQNGbh_7S6aKs'
})(MapContainer);