import React from 'react'
import Sidebar from '../components/admin/sidebar'
import Header from '../components/admin/header'
import Dashboard from '../components/admin/dashboard'
export default function Admin() {

    return (
        <>
            <Header />
            <Sidebar />
            <Dashboard />
        </>
    )
}
