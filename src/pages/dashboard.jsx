import React, { useEffect } from 'react'
import Sidebar from '../components/common/sidebar'
import Header from '../components/common/header'
import { Outlet } from 'react-router-dom'
import { GET_COMPANY_DETAILS } from '../provider/reducers/company.reducer'
import GetCredentials from '../utils/get_credentials.util'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
export default function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const handleRender = async () => {
            const data = GetCredentials();
            if (!data.panelid || !data.loginid) {
                navigate("/auth/signin")
            }
            else {
                dispatch(GET_COMPANY_DETAILS())
            }
        }
        handleRender()
    }, [])
    return (
        <>
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                <Outlet />
            </div>
        </>
    )
}
