import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css';

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/prantobiswas321/tourism_data/main/data.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
                {
                    places.map(place => <Place
                        place={place}
                        key={place.id}
                    ></Place>)
                }
            </div>
        </div>
    );
};

export default Places;