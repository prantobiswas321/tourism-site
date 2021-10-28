import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css';

const Place = (props) => {
    const { name, cost, image, id } = props.place;
    const url = `/placeOrder/${id}`;
    return (
        <div>
            <div className="col">
                <div className="card-color text-center">
                    <img src={image} className="card-img-top mx-auto mt-3 w-75 mx-auto mb-2 rounded-3" alt="" />
                    <div className="mt-1">
                        <h5 className="card-title fw-bold">Name: {name}</h5>
                        <h5 className="card-text">Cost: ${cost}</h5>
                        <br />
                        <Link to={url}>
                            <button className="btn btn-success my-3">Book</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;