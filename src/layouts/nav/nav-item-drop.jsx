import React from 'react'
import { Link } from 'react-router-dom'
export default function NavItemDrop({ children, text }) {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                        {text}
                        <i className="right fas fa-angle-left" />
                    </p>
                </Link>
                <ul className="nav nav-treeview">
                    {children}
                </ul >
            </li >
        </>
    )
}
