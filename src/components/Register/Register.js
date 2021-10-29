import React from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='container'>
            <div className="col my-auto">
                <h1 className="textColor mt-5">Create Your Account!!!</h1>

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

                    <div className="row mb-3">
                        {/* {error} */}
                    </div>

                    <input type="submit" value="Register" className="bg-success px-3 py-2 rounded-3 text-white" />

                    <NavLink className="text-decoration-none" to="/login">
                        <p className="pt-5 fw-bold text-dark">If you already have An Account?</p>
                    </NavLink>
                </form>
            </div>
        </div>
    );
};

export default Register;