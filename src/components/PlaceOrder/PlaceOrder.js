import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {

    const { user } = useAuth();
    const phoneRef = useRef();
    const addressRef = useRef();
    const { id } = useParams();

    const nameRef = useRef();
    const emailRef = useRef();

    const bookingNameRef = useRef();
    const costRef = useRef();

    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])

    const placeOrder = (e) => {

        e.preventDefault();
        const singleOrder = {

            userName: nameRef.current.value,
            userEmail: emailRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            name: bookingNameRef.current.value,
            description: order?.description,
            cost: costRef.current.value,
            orderStatus: 'pending',

        };

        fetch('http://localhost:5000/userOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleOrder)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Booking Done Successfully');
                    e.target.reset();
                }
            });
    }

    return (
        <div className='bg-secondary'>
            <div className="py-5 text-white add-form">
                <img src={order?.image} className="mx-auto w-50 rounded-3" alt="result_image" />
                <h1 className="mt-3">Name: {order?.name}</h1>
                <h4 className="mx-5 px-5">Description: {order?.description}</h4>
                <h4>Cost: ${order?.cost}</h4>

                <br />

                <form onSubmit={placeOrder}>
                    <label htmlFor="">Name: </label>
                    <input type="text" value={user.displayName || ''} ref={nameRef} readOnly />
                    <label htmlFor="">Email: </label>
                    <input type="email" value={user.email || ''} ref={emailRef} readOnly />

                    <label htmlFor="">Phone no : </label>
                    <input type="number" ref={phoneRef} id="" />
                    <label htmlFor="">Order Name: </label>
                    <input type="text" value={order?.name || ''} ref={bookingNameRef} readOnly />
                    <label htmlFor="">Order Cost: </label>
                    <input type="text" value={order?.cost || ''} ref={costRef} readOnly />
                    <label htmlFor="">Address: </label>
                    <textarea type="text" ref={addressRef} placeholder='Address' />
                    <button>Proceed Booking</button>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;