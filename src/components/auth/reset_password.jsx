import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Text from "../../layouts/inputs/text";
import Password from '../../layouts/inputs/password';
import Button from "../../layouts/form/button";
import { RiLoader2Fill } from "react-icons/ri";
import AUTH_API from '../../api/auth.api';
import EncryptData from '../../utils/encrypt_data.util';

export default function ResetPassword() {
    const navigate = useNavigate();
    const [alert_message, update_msg] = useState("");
    const OTP_REF = useRef();
    const PASSWORD_REF = useRef();
    const CONFIRM_PASSWORD_REF = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!OTP_REF.current.value || !PASSWORD_REF.current.value || !CONFIRM_PASSWORD_REF.current.value) {
                update_msg('All fields are required');
                return;
            }

            if (PASSWORD_REF.current.value !== CONFIRM_PASSWORD_REF.current.value) {
                update_msg("Passwords didn't match");
                return;
            }

            update_msg(<RiLoader2Fill className='loader' />);

            const data = { password: PASSWORD_REF.current.value };
            const encrypted_data = await EncryptData(data);
            const res = await AUTH_API.post('/forgot_password/set_password', { otp: OTP_REF.current.value, ...encrypted_data });
            console.log(res);
            if (res.data.body.resType === 'success') {
                navigate('/auth/reset-password');
            }
            else if (res.data.body.resType === 'error') {
                update_msg("OTP didn't matched")
            }
        } catch (err) {
            console.log(err);
            update_msg('An error occurred. Please try again.');
        }
    }

    return (
        <section className='auth-section'>
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/auth/signin">
                        <strong>OTP Verification</strong>
                    </Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Enter the OTP and new Password</p>
                        <form onSubmit={handleSubmit}>
                            <Text placeholder="OTP" ref={OTP_REF} />
                            <Password placeholder="New Password" ref={PASSWORD_REF} />
                            <Password placeholder="Confirm Password" ref={CONFIRM_PASSWORD_REF} />
                            <div className="row display-center-flex">
                                <div className="col-md-6">
                                    <Button text="Submit" type='submit' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <p className='alert-message'>{alert_message}</p>
                </div>
            </div>
        </section>
    );
}
