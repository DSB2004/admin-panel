import { Route, Routes } from 'react-router-dom';

import Auth from '../pages/auth';

import EmailVerification from '../components/auth/email_verify';
import SignIn from '../components/auth/signin';
import SignUp from '../components/auth/signup';
import ResetPassword from '../components/auth/reset_password';

const AUTH_ROUTES = () => {
    return (
        <>
            <Routes>
                <Route path="/auth" element={<Auth />}>
                    <Route path='verify' element={<EmailVerification />} />
                    <Route path='signin' element={<SignIn />} />
                    <Route path='signup' element={<SignUp />} />
                    <Route path='reset-password' element={<ResetPassword />} />
                </Route>
            </Routes>
        </>
    )
}

export default AUTH_ROUTES;