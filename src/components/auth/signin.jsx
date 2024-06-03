import React, { useRef, useState } from 'react'

import Text from '../../layouts/inputs/text'
import Password from '../../layouts/inputs/password'
import SubmitRememberMe from '../../layouts/inputs/submit_remember_me'
import AuthNavLink from '../../layouts/nav/auth-nav-link'


import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { encryptData } from '../../utils/encrypt_data.util'
import { RiLoader2Fill } from "react-icons/ri";


import AUTH_API from "../../api/auth.api"
import SetCredentials from "../../utils/set_credentials.util"

export default function SignIn() {


    const EMAIL_REF = useRef();
    const PASSWORD_REF = useRef();
    const REMEMBER_ME_REF = useRef();
    const navigate = useNavigate();
    const [alert_message, update_msg] = useState("");

    const HandleSignIn = async () => {
        try {
            update_msg(<RiLoader2Fill className='loader' />)
            const USER_CREDENTIALS = {
                email: await encryptData(EMAIL_REF.current.value),
                password: await encryptData(PASSWORD_REF.current.value),
                remember_user: REMEMBER_ME_REF.current.checked
            }
            
            const response = await AUTH_API.post("/login", USER_CREDENTIALS);

            if (response.data.body.error) {
                update_msg(response.data.body.error)
            }
            else {
                await SetCredentials(response.data.body);
                navigate('/')
            }

        }
        catch (err) {
            update_msg("Internal Error!! Check logs")
        }
    }


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
                            <SubmitRememberMe ref={REMEMBER_ME_REF} onClick={() => HandleSignIn()} />
                        </form>
                        <AuthNavLink to="/auth/verify" text="I forget my password" />
                        <AuthNavLink to="/auth/signup" text="Register a new membership" />
                    </div>
                    <p className='alert-message'>{alert_message}</p>
                </div>
            </div>

        </section >
    )
}
