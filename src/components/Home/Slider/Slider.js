import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../Image/slider1.jpg'
import slider2 from '../../Image/slider2.jpg'
import slider3 from '../../Image/slider3.jpg'

const Slider = () => {
    return (
        <section className="mt-5">
            <h1 className="text-center mt-5 mb-5 text-success">Wedding Slide Show</h1>
            <div className="container">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slider1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slider2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slider3} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default Slider;