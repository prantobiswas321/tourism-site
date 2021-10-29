import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <div className="col my-auto">
                <h1 className="textColor mt-5">Login Your Account!!!</h1>

                <form className='mt-3'>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="ms-2 row mb-3">
                        {/* {error} */}
                    </div>
                    <input type="submit" value="Login" className="bg-success px-3 py-2 rounded-3 text-white" />
                </form>

                <h1 className="my-3 textColor fw-bold">or you can,</h1>

                <button className="btn btn-warning" >Sign In With Google</button>

                <NavLink className="text-decoration-none fw-bold" to="/register">
                    <p className="pt-3 text-dark fw-bold">Create new account!!</p>
                </NavLink>

            </div>
        </div>
    );
};

export default Login;