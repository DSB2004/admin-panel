import React from 'react'

export default function Password({ placeholder, ref }) {
    return (
        <div className="input-group mb-3">
            <input
                ref={ref}
                type="password"
                className="form-control"
                placeholder={placeholder}
                fdprocessedid="d42sa9"
            />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
            </div>
        </div>
    )
}
