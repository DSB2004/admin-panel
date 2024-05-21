import React, { forwardRef } from 'react';

const Dropdown = forwardRef(({ label }, ref) => {
    return (
        <div className="form-group">
            <label htmlFor="accountManagerSelect">{label}</label>
            <select
                id="accountManager"
                className="form-control select2"
                style={{ width: '100%' }}
                name="accountmanager"
                ref={ref} // Use the ref here
            >
                <option value="">Select {label}</option>
                <option>{label} 1</option>
                <option>{label} 2</option>
                <option>{label} 3</option>
                <option>{label} 4</option>
                <option>{label} 5</option>
                <option>{label} 6</option>
            </select>
        </div>
    );
});

export default Dropdown;