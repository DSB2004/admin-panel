import React from 'react'

export default function Dropdown({ label }) {
    return (
        <>
            <div className="form-group">
                <label>{label}</label>
                <select
                    className="form-control select2 select2-hidden-accessible"
                    style={{ width: "100%" }}
                    data-select2-id="1"
                    tabIndex={-1}
                    aria-hidden="true"
                >
                    <option selected="selected" data-select2-id="3">
                        Alabama
                    </option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                </select>
            </div>
        </>


    )
}
