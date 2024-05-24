import React from 'react'

export default function TextArea({ label, rows, placeholder }) {
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{label}</label>
            <textarea

                className="form-control"
                placeholder={placeholder}
                fdprocessedid="z92wtr"
                rows={rows}

            />
        </div>
    )
}
