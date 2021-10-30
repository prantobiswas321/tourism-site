import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { id } = useParams();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    const detail = places.find(single => single.key === parseInt(id));
    const url = `/myOrders`;
    return (
        <div className='bg-secondary'>
            <div className="py-5 text-white">
                <img src={detail?.image} className="mx-auto w-50 rounded-3" alt="result_image" />
                <h1 className="mt-3">Name: {detail?.name}</h1>
                <h4 className="mx-5 px-5">Description: {detail?.description}</h4>
                <h4>Cost: ${detail?.cost}</h4>
                {/* <button className='btn btn-danger'>Confirm Order</button> */}
                <Link to={url}>
                    <button className='btn btn-danger'>Confirm Order</button>
                </Link>
            </div>
        </div>
    );
};

export default PlaceOrder;