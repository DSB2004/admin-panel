import React from 'react'

export default function PageBtn({ onClick, children, className }) {
    return (
        <button className={`pagenation_button ${className}`} onClick={() => { if (onClick) { onClick() } }}>
            {children}
        </button >
    )
}
