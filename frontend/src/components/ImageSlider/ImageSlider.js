import React, {useState} from 'react';

import classes from './ImageSlider.css';
import Aux from '../../hoc/Auxx';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <Aux className='slider'>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return <Aux className={index === current ? 'slide active' : 'slide'} key = {index}>
                    {index === current && (<div className="slider-images"><img src={slide.image}/></div>)}
                    
                    </Aux>
            })}
        </Aux>
    );
};

export default ImageSlider;