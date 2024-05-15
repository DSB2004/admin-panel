import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
    return (
        <section className='auth-section'>
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/auth/signin">
                        <strong>
                            Sign Up
                        </strong>
                    </Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign Up to start your session</p>
                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    fdprocessedid="tksub"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    fdprocessedid="d42sa9"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        fdprocessedid="45vpgj"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <Link to="/auth/signin" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" /> Sign up using Facebook
                            </Link>

                            <Link to="/auth/signin" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" /> Sign up using Google+
                            </Link>
                        </div>
                    
                        <p className="mb-0">
                            <Link to="/auth/signin" className="text-center">
                                Continue an existing membership
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
