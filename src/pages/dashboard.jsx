import React from 'react'
import Sidebar from '../components/common/sidebar'
import Header from '../components/common/header'
import { Outlet } from 'react-router-dom'
// import Dashboard from '../components/dashboard/dashboard'
export default function Dashboard() {

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
