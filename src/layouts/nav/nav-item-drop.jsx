import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavItemDrop({ children, text }) {
    const [isOpen, setIsOpen] = useState(false);
    const [className, setClassName] = useState('');

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setClassName('menu-is-opening menu-open');
            }, 100);
        } else {
            setClassName('');
        }
    }, [isOpen]);

    return (
        <li className={`nav-item ${className}`}>
            <Link to="#" className="nav-link" onClick={() => setIsOpen(!isOpen)}>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                    {text}
                    <i className="right fas fa-angle-left" />
                </p>
            </Link>
            <ul className="nav nav-treeview " onClick={() => { setIsOpen(false) }}>
                {children}
            </ul>
        </li>
    );
}
