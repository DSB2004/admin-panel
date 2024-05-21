import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Text from "../../layouts/inputs/text"
import Button from '../../layouts/form/button';
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
                                <Text placeholder="Enter you Email" icon={<span className="fas fa-envelope" />} />
                                <div className="row">
                                    <div className="col-12">
                                        <Button className="btn-block" text="Request new password" />
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

            </section >
        </>
    )
}