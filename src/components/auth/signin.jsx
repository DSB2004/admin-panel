import React from 'react'
import { Link } from 'react-router-dom'
export default function SignIn() {
    return (
        <section className='auth-section'>
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/auth/signin">
                        <strong>
                            Sign In
                        </strong>
                    </Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to continue your session</p>
                        <form>
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
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <Link to="/auth/signin" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                            </Link>

                            <Link to="/auth/signin" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                            </Link>
                        </div>
                        <p className="mb-1">
                            <Link to="/auth/verify" className="text-center">
                                <a href="forgot-password.html">I forgot my password</a>
                            </Link>
                        </p>
                        <p className="mb-0">
                            <Link to="/auth/signup" className="text-center">
                                Register a new membership
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
