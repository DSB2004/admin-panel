import React, { forwardRef } from 'react';

const Input = forwardRef(({ type, label, placeholder }, ref) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{label}</label>
            <input
                autoComplete={true} 
                ref={ref}
                type={type}
                className="form-control"
                placeholder={placeholder}
                fdprocessedid="z92wtr"
            />
        </div>
    );
});

export default Input;
