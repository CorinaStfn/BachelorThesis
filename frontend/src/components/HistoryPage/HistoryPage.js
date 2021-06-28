import React, { Component, useState } from 'react'
import axios from 'axios'

import NavBar from '../NavBar/NavBar';
import Aux from '../../hoc/Auxx';
import classes from './HistoryPage.css';
import sighisoara_map from '../../Images/sighisoara-map.png'
import herman from '../../Images/piata-Hermann-Oberth-2.png'
import sig_photo1 from '../../Images/sig-history-1.png'
import sig_photo2 from '../../Images/sig-history-2.png'
import sig_photo3 from '../../Images/sig-history-3.png'
import sig_photo4 from '../../Images/sig-history-4.png'
import sig_photo5 from '../../Images/sig-history-5.png'


const HistoryPage = (props) => {

    const [clockHover, setClockHover] = useState(false);
    const [ironsmithHover, setIronsmithHover] = useState(false);
    const [butcherHover, setButcherHover] = useState(false);
    const [cobblerHover, setCobblerHover] = useState(false);
    const [furrierHover, setFurrierHover] = useState(false);
    const [ropemakerHover, setRopemakerHover] = useState(false);    
    const [tailorHover, setTailorHover] = useState(false);
    const [tannerHover, setTannerHover] = useState(false);
    const [tinsmithHover, setTinsmithHover] = useState(false);

    const onMouseEnterClock = (e) => {
        setClockHover(true);
    }

    const onMouseLeave = (e) => {
        setClockHover(false);
        setIronsmithHover(false);
        setButcherHover(false);
        setCobblerHover(false);
        setFurrierHover(false);
        setRopemakerHover(false);
        setTailorHover(false);
        setTannerHover(false);
        setTinsmithHover(false);
    }

    const onMouseEnterIronsmith = (e) => {
        setIronsmithHover(true);
    }

    const onMouseEnterButcher = (e) => {
        setButcherHover(true);
    }

    const onMouseEnterCobbler = (e) => {
        setCobblerHover(true);
    }

    const onMouseEnterFurrier = (e) => {
        setFurrierHover(true);
    }

    const onMouseEnterRopemaker= (e) => {
        setRopemakerHover(true);
    }

    const onMouseEnterTailor = (e) => {
        setTailorHover(true);
    }

    const onMouseEnterTanner = (e) => {
        setTannerHover(true);
    }

    const onMouseEnterTinsmith = (e) => {
        setTinsmithHover(true);
    }

    const isClockHovered = clockHover;
    const clockStyle = isClockHovered ? {fontSize: '1.15rem', opacity: '.75'} : {};

    const isIronsmithHovered = ironsmithHover;
    const ironsmithStyle = isIronsmithHovered ? {fontSize: '1.15rem', opacity: '.75'} : {};

    const isButcherHovered = butcherHover;
    const butcherStyle = isButcherHovered ? {fontSize: '1.15rem', opacity: '.75'} : {};

    const isCobblerHovered = cobblerHover;
    const cobblerStyle = isCobblerHovered ? {fontSize: '1.15rem', opacity: '.75'} : {};

    const isFurrierHovered = furrierHover;
    const furrierkStyle = isFurrierHovered ? {fontSize: '1.15rem', opacity: '.75'} : {};

    const isRopemakerHovered = ropemakerHover;
    const ropemakerStyle = isRopemakerHovered ? {fontSize: '1.15rem', opacity: '.75'} : {};

    const isTailorHovered = tailorHover;
    const tailorStyle = isTailorHovered ? {fontSize: '1.15rem', opacity: '.75'} : {};

    const isTannerHovered = tannerHover;
    const tannerStyle = isTannerHovered ? {fontSize: '1.15rem', opacity: '.75'} : {};

    const isTinsmithHovered = tinsmithHover;
    const tinsmithStyle = isTinsmithHovered ? {fontSize: '1.05rem', opacity: '.75'} : {};
    

    return <Aux>
        <div id="historyContainer">
            <div className="container">
                <div className="history-title">Historic Centre of Sighișoara</div>
                <div className="aboutSighisoara">
                    The origins of Sighisoara city go back to the Roman times.
                    During the First Century AD, the Dacians (ancient inhabitants of the territory of modern Romania which eventually will develop into the Romanian people), built a fortification called Sandava.
                    Under the Roman administration it was known as Castrum Stenarum.
                    During the 12th century, the Transylvanian Saxons built a new citadel which was named Schäßburg.
                    Sighisoara (Schäßburg - Schassburg or Schäsbrich in German) still stands as one of the most beautiful and best-preserved medieval towns in Europe.
                </div>
                <div className="sighisoara-map"><img src={sighisoara_map}></img>Sighișoara in the Grand Duchy of Transylvania maps, 1769–1773.</div>
                <div className="aboutCitadel">
                    Sighisoara's Citadel (Cetatea Sighisoarei)
                    For several centuries, Sighisoara was a military and political stronghold. During the 14th - 16th centuries,
                    the Saxon craft guilds erected towers around the citadel walls to protect the town from Turkish raids.
                    Laid out on two to four levels, the towers stored ammunition and food supplies and were provided with firing windows for cannons, shells and arrows. Of the original fourteen towers and five artillery bastions, nine towers and two bastions have survived the test of time.
                    <br></br><br></br>
                    Medieval structures that have whistood the centuries include:
                </div>
                <div class="citadel-towers">
                    <div className="citadel-tower clock">
                        <span onMouseEnter={onMouseEnterClock} onMouseLeave={onMouseLeave}>Clock Tower</span><span> <br></br>(Turnul cu Ceas)</span><br></br>
                        <span style={clockStyle}>In every fortification system there is one fortress that dominates the others: the master-tower. The Clock Tower of Sighișoara is the main entry point to the citadel, opposite guarded by Tailors' Tower. With its 64 meters of height, the tower is visible from almost every corner of the city from Mures County, its purpose was to defend the main gate of the citadel and also served as the town hall until 1556. Now It's considered one of the most expressive clock tower in the whole Transylvania.<br></br><br></br>
                        The tower began to be built at the end of 13th century, It was built in the 14th century as a simple gate tower with a maximum of two levels: the ground floor and first two floors of the tower were made of sandstone and river rock, the first stage of the tower construction probably had a form identical to the Tailors tower.In the 16th century the old roof was demolished, they have added two floors built of brick and it was built a balcony and the roof. Nobody knows for sure how the roof was before the 1676 fire.<br></br>
                        What makes this tower unique in all the country is its clock with puppets inside.</span>
                    </div>
                    <div class="citadel-tower ironsmith">
                        <span onMouseEnter={onMouseEnterIronsmith} onMouseLeave={onMouseLeave}>Ironsmiths' Tower</span><span> <br></br>(Turnul Fierarilor)</span><br></br>
                        <span style={ironsmithStyle}>Its main role was to protect the Monastery Church of Sighişoara in case of a siege. It was built in 1631 on the foundations of the old Barber's Tower.</span>
                    </div>
                    <br></br>
                    <div class="citadel-tower butcher">
                        <span onMouseEnter={onMouseEnterButcher} onMouseLeave={onMouseLeave}>Butchers' Tower</span><span><br></br> (Turnul Macelarilor)</span><br></br>
                        <span style={butcherStyle}>The Butcher's Tower was built in late 15th century. Originally, the tower was shaped in an eight-sided prism, but in the 16th century it was rebuilt on a hexagonal plan and was raised with the specific purpose of enlarge the field of view over the small bastion built right in front of it.</span>
                        
                    </div>
                    <br></br>
                    <div class="citadel-tower cobbler">
                        <span onMouseEnter={onMouseEnterCobbler} onMouseLeave={onMouseLeave}>Cobblers' Tower</span><span><br></br> (Turnul Cizmarilor)</span><br></br>
                        <span style={cobblerStyle}>The building has baroque architectural influences. Despite its low height, the tower is interesting due to its pentagon plan, an outer diameter of 10 meters long and a roof hosting two small and elegant observation towers, one facing South-east and one North-west. The current tower was built in 1681 on the site of a previous destroyed tower.</span>
                        
                    </div>
                    <br></br>
                    <div class="citadel-tower furrier">
                        <span onMouseEnter={onMouseEnterFurrier} onMouseLeave={onMouseLeave}>Furriers' Tower</span><span> <br></br>(Turnul Cojocarilor)</span><br></br>
                        <span style={furrierkStyle}>The tower has a modest size, but is very well proportioned. It was dated early 14th century because of its simple form. Documents dated 1568 mention that the tower was rebuilt that same year: the builders worked 40 days for the body and 36 days for the renovation of the roof. Repairs were also mentioned lateron in 1594 and 1595. The fire of 1676 partly affected the tower and its current shape dates from the big repairs of 1679.</span>
                        
                    </div>
                    <br></br>
                    <div class="citadel-tower tailor">
                        <span onMouseEnter={onMouseEnterTailor} onMouseLeave={onMouseLeave}>Tailors' Tower</span><span><br></br>(Turnul Croitorilor)</span><br></br>
                        <span style={tailorStyle}>This tower is considered one of the most beautiful and impressive towers of the fortress due to its massiveness and simplicity. The two passages at the bottom suggest an early dating, probably in the late 12th or 14th century. The two gates were in ancient railings that slides vertically. <br></br>When the fire started in 1676, inside the tower there were large quantities of grain, projectiles, breastplates, halberds, two long guns and a big amount of gunpowder. The explosion of gunpowder provoked the destruction of the upper side of the tower and of the North-west corridor. The current appearance is due to the restorations occurred after the fire. Immediately after restorations the North-west corridor was turned into a warehouse, at least until 1935.</span>
                    </div>
                    <div class="citadel-tower ropemaker">
                        <span onMouseEnter={onMouseEnterRopemaker} onMouseLeave={onMouseLeave}>Ropemakers' Tower</span><span> <br></br>(Turnul Franghierilor)</span><br></br>
                        <span style={ropemakerStyle}>Its importance lies primarily in the fact that in the basement you can find traces of plugged loopholes which prove how high the ancient walls were.In 1630 the tower was repaired by Major M. Eisenberger.</span>
                    </div>
                    <br></br>
                    <div class="citadel-tower Tanner">
                        <span onMouseEnter={onMouseEnterTanner} onMouseLeave={onMouseLeave}>Tanners' Tower</span><span> <br></br>(Turnul Tabacarilor)</span><br></br>
                        <span style={tannerStyle}>This tower was supposed to guard and protect the courtyard of the Clock Tower.
                        Shape and position retracted behind the wall recommend it as one of the old towers, perhaps even the first one of the city. This tower with archaic aspect was not affected in any way by the fire in 1676.</span>
                    </div>
                    <br></br>
                    <div class="citadel-tower tinsmith">
                        <span onMouseEnter={onMouseEnterTinsmith} onMouseLeave={onMouseLeave}>Tinsmiths' Tower</span><span> <br></br>(Turnul Cositorilor)</span><br></br>
                        <span style={tinsmithStyle}>Tinsmith's Tower has the most expressive architecture: 25 meters high, the tower starts with a square base (part of the old tower), right after the brick trunk stands in pentagonal shape and above suddenly widens and becomes octagonal. The roof, slightly unbalanced, has a hexagonal plan and the woodwork inside is a veritable masterpiece of carpenters of Sighisoara. The Tin Tower, together with the Clock Tower, has an exceptional defensive position.</span>
                    </div>
                </div>
                <div className="herman"><img src={herman}></img></div>
                <div className="sig-photo1"><img src={sig_photo1}></img>Drawning of Sighisoara form 1669</div>
                <div className="sig-photo2"><img src={sig_photo2}></img>
                Sighisoara 1776</div>
                <div className="sig-photo3"><img src={sig_photo3}></img>
                The citadel's walls in 1860</div>
                <div className="sig-photo4"><img src={sig_photo4}></img>
                The Clock Tower in 1906</div>
                <div className="sig-photo5"><img src={sig_photo5}></img>
                The Tailors' Tower in 1880</div>
            </div>
        </div>

        <main>
            {props.children}
        </main>
    </Aux>
};

export default HistoryPage;