import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import './MyOrders.css';

const MyOrders = () => {

    // const { email } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    return (
        <div>
            <h2>My orders</h2>
        </div>
    );
};

export default MyOrders;