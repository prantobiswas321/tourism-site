// import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import MyOrders from '../MyOrders/MyOrders';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const bookingNameRef = useRef();
    const costRef = useRef();

    const { user } = useAuth();
    const { id } = useParams();
    const [places, setPlaces] = useState([]);
    // const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    const order = places.find(single => single._id === id);
    // console.log(order);
    // const email = user.email;
    // const url = `/myOrders/${email}`;

    // const handleOrder = (props) => {
    //     order.email = email;
    //     console.log('ids', order._id, props);
    //     axios.post('http://localhost:5000/orders', order)
    //         .then(res => {
    //             // console.log(res);
    //             if (res.data.insertedId) {
    //                 alert('Successfully ordered');
    //             }
    //         })
    // }

    // useEffect(() => {
    //     fetch('http://localhost:5000/orders')
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    const handleSubmit = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        // const orderId = idRef.current.value;
        const bookingName = bookingNameRef.current.value;
        const cost = costRef.current.value;
        const orderStatus = 'pending';


        const orderInfo = { name, email, phone, address, bookingName, cost, orderStatus };
        // console.log(name, email, address);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Booked.');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className='bg-secondary'>
            <div className="py-5 text-white add-form">
                <img src={order?.image} className="mx-auto w-50 rounded-3" alt="result_image" />
                <h1 className="mt-3">Name: {order?.name}</h1>
                <h4 className="mx-5 px-5">Description: {order?.description}</h4>
                <h4>Cost: ${order?.cost}</h4>

                <br />

                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name: </label>
                    <input type="text" value={user.displayName || ''} ref={nameRef} readOnly />
                    <label htmlFor="">Email: </label>
                    <input type="email" value={user.email || ''} ref={emailRef} readOnly />
                    {/* <input type="text" value={id || ''} ref={idRef} readOnly /> */}
                    <label htmlFor="">Phone no : </label>
                    <input type="number" ref={phoneRef} id="" />
                    <label htmlFor="">Order Name: </label>
                    <input type="text" value={order?.name || ''} ref={bookingNameRef} readOnly />
                    <label htmlFor="">Order Cost: </label>
                    <input type="text" value={order?.cost || ''} ref={costRef} readOnly />
                    <label htmlFor="">Address: </label>
                    <textarea type="text" ref={addressRef} placeholder='Address' />

                    {/* <input type="submit" value="Proceed order" /> */}
                    <button>Proceed order</button>
                </form>

                {/* <Link to={url}>
                    <button onClick={() => handleOrder(orders)} className='btn btn-danger'>Confirm Order</button>
                </Link> */}

            </div>
        </div>
    );
};

export default PlaceOrder;