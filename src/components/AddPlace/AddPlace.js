import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

import './AddPlace.css';

const AddPlace = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added');
                    reset();
                }
            })
    }

    return (
        <div className='add-service'>
            <h2>Please add a place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea {...register("description")} placeholder='Description' />
                <input type="number" {...register("cost")} placeholder='Cost' />
                <input {...register("image")} placeholder='Image url' />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddPlace;