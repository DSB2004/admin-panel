import React from 'react'
import { Link } from 'react-router-dom'
export default function NavItem({ to, text }) {
    return (
        <li className="nav-item">
            <Link
                to={to}
                className="nav-link"
            >
                <i className="far fa-circle nav-icon" />
                <p>{text}</p>
            </Link>
        </li>
    )
}
