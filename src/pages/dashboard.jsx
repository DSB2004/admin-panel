import React, { useEffect } from 'react'
import Sidebar from '../components/common/sidebar'
import Header from '../components/common/header'
import { Outlet } from 'react-router-dom'
// import Dashboard from '../components/dashboard/dashboard'
import GetCredentials from '../utils/get_credentials.util'
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
    const navigate = useNavigate()
    useEffect(() => {
        const data = GetCredentials();
        if (!data.admpnlid || !data.loginid) {
            navigate("/auth/signin")
        }
    }, [])
    return (
        <>
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                <div className='inner-wrapper'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
