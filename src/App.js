
// import Hom from './pages/admin';
import Admin from './pages/admin';

import Auth from './pages/auth';

import EmailVerification from './components/auth/email_verify';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import ResetPassword from './components/auth/reset_password';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} >
          <Route path='verify' element={<EmailVerification  />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='reset-password' element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
