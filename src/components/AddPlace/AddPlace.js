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
        <div className='add-service mt-5 mb-5'>
            <h1 className='mb-5'>Please add a place</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <input type="number" {...register("cost")} placeholder='Cost' />
                <input {...register("image")} placeholder='Image url' />
                <textarea {...register("description")} placeholder='Description' />
                {/* <input type="submit" /> */}
                <button className='btn btn-success'>Submit</button>
            </form>

        </div>
    );
};

export default AddPlace;