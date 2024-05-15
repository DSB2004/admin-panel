import React from 'react'

export default function Input({ type, label, placeholder }) {
    return (
        <>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{label}</label>
                <input
                    type={type}
                    className="form-control"
                    placeholder={placeholder}
                    fdprocessedid="z92wtr"
                />
            </div>
        </>
    )
}
