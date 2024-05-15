import React from 'react'
import { Link } from 'react-router-dom'
export default function NavItemLink({ to, text }) {
    return (
        <>
            <Link to={to} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>{text}</p>
            </Link>
        </>

    )
}
