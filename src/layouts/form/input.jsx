import React, { forwardRef, useState } from 'react';
import AutoSuggestion from './auto_suggestion';
const Input = forwardRef(({ type, label, placeholder, name, autoComplete = false, disable, pattern, title, value }, ref) => {
    const [auto_com_value, setValue] = useState("");

    return (
        <div className="form-group relative">
            <label htmlFor="exampleInputEmail1">{label}</label>
            <input
                onChange={(e) => setValue(e.target.value)}
                ref={ref}
                type={type}
                name={name}
                className="form-control"
                placeholder={placeholder}
                fdprocessedid="z92wtr"
                disabled={disable}
                pattern={pattern}
                title={title}
                value={value}
            />
            {autoComplete ? <>
                <AutoSuggestion value={auto_com_value} />
            </> : <></>
            }
        </div >
    );
});

export default Input;


//