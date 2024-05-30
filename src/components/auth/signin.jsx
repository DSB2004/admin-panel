import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Text from '../../layouts/inputs/text'
import Password from '../../layouts/inputs/password'
import SubmitRememberMe from '../../layouts/inputs/submit_remember_me'
import AuthNavLink from '../../layouts/nav/auth-nav-link'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HANDLE_LOGIN } from '../../provider/reducers/auth.reducer'
import { encryptData } from '../../utils/encrypt_data.util'
import { RiLoader2Fill } from "react-icons/ri";
export default function SignIn() {
    const dispatch = useDispatch();
    const EMAIL_REF = useRef();
    const PASSWORD_REF = useRef();
    const REMEMBER_ME_REF = useRef();
    const navigate = useNavigate();
    const [alert_message, update_msg] = useState("");

    const handleSubmit = async () => {
        if (!REMEMBER_ME_REF.current.checked) {
            update_msg("Checkbox needed")
            return;
        }
        update_msg(<RiLoader2Fill className='loader' />)
        const data = {
            email: await encryptData(EMAIL_REF.current.value),
            password: await encryptData(PASSWORD_REF.current.value),
            remember_user: REMEMBER_ME_REF.current.checked
        }
        const response = await dispatch(HANDLE_LOGIN(data)).unwrap();

        if (response.statusCode === 200) {
            navigate("/")
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
                            <SubmitRememberMe ref={REMEMBER_ME_REF} onClick={() => handleSubmit()} />
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
