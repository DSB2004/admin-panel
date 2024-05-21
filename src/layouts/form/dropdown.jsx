import React from 'react'

export default function Dropdown({ label }) {
    return (
        <>
            <div className="form-group">
                <label htmlFor="accountManagerSelect">{label}</label>
                <select
                    id="accountManager"
                    className={`form-control select2`}
                    style={{ width: '100%' }}

                    name="accountmanager"
                >
                    <option value="">Select Account Manager</option>
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


