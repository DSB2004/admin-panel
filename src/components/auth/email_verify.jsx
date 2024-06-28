import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Text from "../../layouts/inputs/text"
import Button from '../../layouts/form/button';
import { RiLoader2Fill } from "react-icons/ri";
import AUTH_API from '../../api/auth.api';
import EncryptData from '../../utils/encrypt_data.util';
export default function EmailVerification() {
    const navigate = useNavigate();
    const [alert_message, update_msg] = useState("");
    const EMAIL_REF = useRef();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (!EMAIL_REF.current || !EMAIL_REF.current.value) {
                update_msg('All field are required');
            }
            update_msg(<RiLoader2Fill className='loader' />)
            const data = { email: EMAIL_REF.current.value }
            const encrypt_data = await EncryptData(data);
            const res = await AUTH_API.post("/forgot_password/generate_otp", encrypt_data);
            console.log(res)
            if (res.data.body.resType === 'success') {
                navigate('/auth/reset-password');
            }
            else if (res.data.body.resType === 'error') {
                update_msg("Invalid Email")
            }

        }
        catch (err) {
            console.log(err)
        }


    }
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
                            <form onSubmit={handleSubmit}>
                                <Text placeholder="Enter you Email" ref={EMAIL_REF} type="email" icon={<span className="fas fa-envelope" />} />
                                <div className="row">
                                    <div className="col-12">
                                        <Button className="btn-block" text="Request new password" type="submit" />
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
                        <p className='alert-message'>{alert_message}</p>
                    </div>
                </div>

            </section >
        </>
    )
}