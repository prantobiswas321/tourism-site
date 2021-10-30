import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    const order = places.find(single => single._id === id);
    // console.log(order);
    const email = user.email;
    const url = `/myOrders/${email}`;

    const handleOrder = () => {
        order.email = email;
        axios.post('http://localhost:5000/orders', order)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Successfully ordered');
                }
            })
    }

    return (
        <div className='bg-secondary'>
            <div className="py-5 text-white">
                <img src={order?.image} className="mx-auto w-50 rounded-3" alt="result_image" />
                <h1 className="mt-3">Name: {order?.name}</h1>
                <h4 className="mx-5 px-5">Description: {order?.description}</h4>
                <h4>Cost: ${order?.cost}</h4>

                <Link to={url}>
                    <button onClick={handleOrder} className='btn btn-danger'>Confirm Order</button>
                </Link>
            </div>
        </div>
    );
};

export default PlaceOrder;