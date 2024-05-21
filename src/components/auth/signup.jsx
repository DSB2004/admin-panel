import React from 'react'
import { Link } from 'react-router-dom'
import Text from '../../layouts/inputs/text'
import Password from '../../layouts/inputs/password'
import SubmitRememberMe from '../../layouts/inputs/submit_remember_me'
import AuthNavLink from '../../layouts/nav/auth-nav-link'
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
                            <Text placeholder="Email" icon={<span className="fas fa-envelope" />} />
                            <Password placeholder="Password" />
                            <SubmitRememberMe buttonText="Submit" />
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
                        <AuthNavLink to="/auth/signin" text="Continue an existing membership" />
                    </div>
                </div>
            </div>

        </section>
    )
}
