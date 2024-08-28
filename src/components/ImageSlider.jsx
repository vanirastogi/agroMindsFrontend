import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import slider01 from '../assets/images/slider-01.jpg'
import slider02 from '../assets/images/slider-02.jpg'
import slider03 from '../assets/images/slider-03.jpg'


const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <button>Previous</button>,
        nextArrow: <button>Next</button>,
    };

    const slidesData = [
        {
            img:  slider01 ,
            heading: 'Welcome to N & LW Lawn Care',
            subheading: 'A Great Theme For Garden Lawn Care',
        },
        {
            img:  slider02 ,
            heading: 'Beautiful Garden',
            subheading: 'A Great Theme For Garden Lawn Care',
        },
        {
            img: slider03 ,
            heading: 'Welcome to N & LW Lawn Care',
            subheading: 'A Great Theme For Garden Lawn Care',
        },
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.img} alt={slide.heading} />
                        <div className="slide-text">
                            <h2>{slide.heading}</h2>
                            <p>{slide.subheading}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
