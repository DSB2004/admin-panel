import React from 'react'
import { RiLoader2Fill } from "react-icons/ri";
export default function Loading() {
    return (
        <>
            <div className="full-screeb-loader">
                <RiLoader2Fill className='content-loader loader' />
            </div>
        </>
    )
}
