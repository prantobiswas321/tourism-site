import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Make your tour with us</h3>
                        <p>A journey for business, pleasure, or education often involving a series of stops and ending at the starting point</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Quality at our core</h3>
                        <p>High quality standards. Millions of reviews. A Tripadvisor company.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Memorable experiences</h3>
                        <p>Browse and book tours and activities so incredible, you’ll want to tell your friends.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;