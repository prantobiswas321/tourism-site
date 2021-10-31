import React, { useEffect, useState } from 'react';
import './ManageOrders.css';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    // delete a order
    const handleDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remainingOrders = allOrders.filter(order => order._id !== id);
                    setAllOrders(remainingOrders);
                }
            })
    }

    return (
        <div>
            <h2>Manage all orders</h2>
            <div>
                {
                    allOrders.map((allOrder, key) => <div key={key}>
                        <h2>Order name: {allOrder?.orderName}</h2>
                        <p>Ordered by: {allOrder?.name}</p>
                        <p>Order cost: {allOrder?.cost}</p>
                        <p>Order status: {allOrder?.orderStatus} <button>Update</button></p>
                        <h1>Id: {allOrder?._id}</h1>
                        <button onClick={() => handleDelete(allOrder?._id)}>Delete Order</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;