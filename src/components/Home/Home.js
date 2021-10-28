import React from 'react';
import Places from '../Places/Places';
import './Home.css';

const Home = () => {
    return (
        <div className="back-color">
            <h2>This is home</h2>

            <div id="places" className="mt-5 pt-5">
                <h2 className="text-center fw-bold mb-5"><span className="service-text-color">Our Places</span></h2>
                <Places></Places>
            </div>
        </div>
    );
};

export default Home;