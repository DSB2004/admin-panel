import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function EmailVerification() {
    const navigate = useNavigate();
    return (
        <>
            <section className='auth-section'>
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html">
                            <b>Verify Email</b>
                        </a>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">
                                You forgot your password? Here you can easily retrieve a new password.
                            </p>
                            <form action="recover-password.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary btn-block" onClick={() => navigate('/auth/reset-password')}>
                                            Request new password
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p className="mt-3 mb-1">
                                <Link to="/auth/signin">Continue to existing membership</Link>
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
        </>
    )
}