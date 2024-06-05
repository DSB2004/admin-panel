import React, { forwardRef, useState } from 'react';
import AutoSuggestion from './auto_suggestion';
const Input = forwardRef(({ type, label, placeholder, autoComplete = false, disable, pattern, title }, ref) => {
    const [value, setValue] = useState("");

    return (
        <div className="form-group relative">
            <label htmlFor="exampleInputEmail1">{label}</label>
            <input
                onChange={(e) => setValue(e.target.value)}
                ref={ref}
                type={type}
                className="form-control"
                placeholder={placeholder}
                fdprocessedid="z92wtr"
                disabled={disable}
                pattern={pattern}
                title={title}
            />
            {autoComplete ? <>
                <AutoSuggestion value={value} />
            </> : <></>
            }
        </div >
    );
});

export default Input;
