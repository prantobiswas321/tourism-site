import React, { useEffect, useState } from 'react';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2>My orders</h2>
            <div>
                {
                    orders.map(order => <div key={order._id}>
                        <h2>Order Name: {order?.orderName}</h2>
                        <p>ordered by: {order?.name}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;