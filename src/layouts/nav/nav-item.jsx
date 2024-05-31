import React from 'react'
import { Link } from 'react-router-dom'
export default function NavItem({ to, text, onClick }) {
    return (
        <li className="nav-item"
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        >

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
