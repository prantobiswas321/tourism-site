import React from 'react';
import Banner from '../Banner/Banner';
import Places from '../Places/Places';
import './Home.css';

const Home = () => {
    return (
        <div className="m-0 p-0 back-color mb-4">
            <Banner></Banner>
            <div id="places" className="mb-4 pt-5">
                <h2 className="text-center fw-bold mb-5"><span className="service-text-color">Our Places</span></h2>
                <Places></Places>
            </div>
            <div className="container mb-5 p-5 border border-2 rounded bg-success text-white">
                <div className="row g-2">
                    <div className="col">
                        <h1>Inspiration</h1>
                        <p>It's very easy to create stylish and beautiful prototypes</p>
                    </div>
                    <div className="col">
                        <h1>Travel Tips</h1>
                        <p>While traveling feel the nature more.</p>
                    </div>
                    <div className="col">
                        <h1>Get the Visa</h1>
                        <p>Start travelling the world</p>
                    </div>
                </div>
            </div>

            <div className="back-color d-flex justify-content-between align-items-center">
                <div className="p-2 bd-highlight">
                    <h2 className="fw-bold">Our Programs Emphasize</h2>
                    <p>Special Activities;<br />
                        Travel
                        Arrangements;<br />
                        Private
                        Guide;<br />
                        Location
                        Manager.</p>
                </div>
                <div>
                    <img src="https://templatekit.tokopress.com/travelkit/wp-content/uploads/sites/2/2020/02/Travelling-ilustration.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;