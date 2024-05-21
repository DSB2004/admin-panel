import React from 'react'
import { Link } from 'react-router-dom'
export default function AuthNavLink({ to, text }) {
    return (
        <p className="mb-1">
            <Link to={to} className="text-center">
                {text}
            </Link>
        </p>
    )
}
