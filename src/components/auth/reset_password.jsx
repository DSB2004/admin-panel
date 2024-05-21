import React from 'react'
import { Link } from 'react-router-dom'
import Text from "../../layouts/inputs/text"
import Password from '../../layouts/inputs/password'
import Button from "../../layouts/form/button"
export default function ResetPassword() {
    return (
        <section className='auth-section'>
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/auth/signin">
                        <strong>
                            OTP Verification
                        </strong>
                    </Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Enter the OTP and new Password</p>
                        <form>
                            <Text placeholder="OTP" />
                            <Password placeholder="New Password" />
                            <Password placeholder="Confirm Password" />

                            <div className="row display-center-flex">
                                <div className="col-md-6">
                                    <Button text="Submit" />

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </section >
    )
}
