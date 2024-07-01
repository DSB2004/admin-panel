import React, { useEffect } from 'react'
import Sidebar from '../components/common/sidebar'
import Header from '../components/common/header'
import { Outlet } from 'react-router-dom'
import { GET_COMPANY_DETAILS } from '../provider/reducers/company.reducer'
import GetCredentials from '../utils/get_credentials.util'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { RiLoader2Fill } from "react-icons/ri";
export default function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [content_loading, loading] = useState(true);
    useEffect(() => {
        const handleRender = async () => {

            loading(true)
            const data = GetCredentials();
            if (!data.panelid || !data.loginid) {
                navigate("/auth/signin")
            }
            else {
                await dispatch(GET_COMPANY_DETAILS()).unwrap().then((result) => {
                    // console.log(result)
                    loading(false)
                }).catch((err) => {
                    console.log('Error Loading Content');
                });
            }
        }
        handleRender()
    }, [])
    return (
        <>
            {
                content_loading ?
                    <>
                        <div className="full-screeb-loader">
                            <RiLoader2Fill className='content-loader loader' />
                        </div>
                    </>
                    :
                    <>
                        <Header />
                        <Sidebar />
                        <div className="content-wrapper">
                            <Outlet />
                        </div>
                    </>
            }
        </>
    )
}
