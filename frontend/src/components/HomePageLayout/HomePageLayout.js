import React from 'react';

import Aux from '../../hoc/Auxx';
import NavBar from '../NavBar/NavBar';
import ImageSlider from '../ImageSlider/ImageSlider'
import classes from './HomePageLayout.css'
import { SliderData } from '../ImageSlider/SliderData';

const layout = ( props ) => (
    <Aux>
        <NavBar></NavBar>
        <div className="homePage-div">
            <div className="backdrop-filter">
                <p className="homePage-title">Discovering Sighisoara</p>
                <p className="homePage-subtitle">Europe’s last remaining inhabited medieval citadel</p>
                <p className="homePage-text">Every day we spent in Romania’s Transylvania region was a history lesson. Craft guilds, counts, religious reformations, sieges, great fires, ancient trading routes—there are so many myths, legends and narratives wrapped up in this part of Romania.</p>
                <ImageSlider slides={SliderData}></ImageSlider>
            </div>
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;
