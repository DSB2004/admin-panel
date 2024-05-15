import React from 'react'
import { Link } from 'react-router-dom'
export default function NavHead() {
    return (
        <Link href="../../index3.html" className="brand-link">
            <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>

    )
}
