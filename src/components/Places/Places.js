import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css';

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div>
            {
                !places ? <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                    :
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
                        {
                            places.map(place => <Place
                                place={place}
                                key={place.id}
                            ></Place>)
                        }
                    </div>
            }
        </div>
    );
};

export default Places;