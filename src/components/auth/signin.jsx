import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Text from '../../layouts/inputs/text'
import Password from '../../layouts/inputs/password'
import SubmitRememberMe from '../../layouts/inputs/submit_remember_me'
import AuthNavLink from '../../layouts/nav/auth-nav-link'
export default function SignIn() {

    const EMAIL_REF = useRef();
    const PASSWORD_REF = useRef();
    const REMEMBER_ME_REF = useRef();
    const TYPE_REF = useRef();

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
                            <Text ref={EMAIL_REF} placeholder="Email" icon={<span className="fas fa-envelope" />} />
                            <Password ref={PASSWORD_REF} placeholder="Password" />
                            <SubmitRememberMe ref={REMEMBER_ME_REF} />
                        </form>
                        <AuthNavLink to="/auth/verify" text="I forget my password" />
                        <AuthNavLink to="/auth/signup" text="Register a new membership" />
                    </div>
                </div>
            </div>

        </section >
    )
}
