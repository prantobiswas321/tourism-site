import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import './Login.css';

const Login = () => {
    const { signInUsingGoogle, handleEmail, handlePassword, handleLogin, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // console.log('Came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className='container'>
            <div className="col my-auto">
                <h1 className="textColor mt-5">Login Your Account!!!</h1>

                <form onSubmit={handleLogin} className='mt-3'>
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
                    <div className="ms-2 row mb-3">
                        {error}
                    </div>
                    <input type="submit" value="Login" className="bg-success px-3 py-2 rounded-3 text-white" />
                </form>

                <h1 className="my-3 textColor fw-bold">or you can,</h1>

                <button onClick={handleGoogleLogin} className="btn btn-warning" >Sign In With Google</button>

                <p className="pt-3 text-dark fw-bold">New to RelaxTravel!! <Link to="/register">Create an account</Link></p>

                {/* <Link className="text-decoration-none fw-bold" to="/register">
                    <p className="pt-3 text-dark fw-bold">Create new account!!</p>
                </Link> */}

            </div>
        </div>
    );
};

export default Login;