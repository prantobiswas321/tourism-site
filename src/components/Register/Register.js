import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { handleEmail, handlePassword, handleRegister, error } = useAuth();
    return (
        <div className='container'>
            <div className="col my-auto">
                <h1 className="textColor mt-5">Create Your Account!!!</h1>

                <form onSubmit={handleRegister} className='mt-3'>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" onBlur={handleEmail} required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" onBlur={handlePassword} required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        {error}
                    </div>

                    <input type="submit" value="Register" className="bg-success px-3 py-2 rounded-3 text-white" />

                    <p className="pt-5 fw-bold text-dark">If you already have An Account? <Link to="/login">Login</Link></p>

                    {/* <Link className="text-decoration-none" to="/login">
                        <p className="pt-5 fw-bold text-dark">If you already have An Account?</p>
                    </Link> */}
                </form>
            </div>
        </div>
    );
};

export default Register;