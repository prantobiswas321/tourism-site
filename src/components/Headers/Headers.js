import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Headers.css';

const Headers = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <div className="container">
                <h2 className="fw-bold header-text-color"><span className='text-warning'>R</span>elax<span className='text-success'>T</span>ravel</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ms-auto fs-6 fw-bold navbar-nav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/home" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Home</NavHashLink>
                            </li>

                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/home#places" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Places</NavHashLink>
                            </li>

                            {/* <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/profile" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Profile</NavHashLink>
                            </li> */}

                            {/* <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/about" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >About</NavHashLink>
                            </li> */}

                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/register" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }}>Register</NavHashLink>
                            </li>

                            <li className="nav-item">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none navLinks" to="/login" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Login</NavHashLink>
                            </li>

                            <li className="nav-item">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none navLinks" to="/myOrders" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >My orders</NavHashLink>
                            </li>

                            <li className="nav-item">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none navLinks" to="/manageOrders" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Manage orders</NavHashLink>
                            </li>

                            <li className="nav-item">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none navLinks" to="/addPlace" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Add a place</NavHashLink>
                            </li>


                            {/* {
                                user.email ?
                                    <button className="btn btn-success" onClick={handleLogOut}>{signOutIcon} <span className="fw-bold text-info">Log Out</span> {user.email}</button>
                                    :
                                    <li className="nav-item">
                                        <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none navLinks" to="/login" activeClassName="selected"
                                            activeStyle={{ color: '#00FFFF' }} >Login</NavHashLink>
                                    </li>
                            } */}
                        </ul>


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Headers;