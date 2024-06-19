import React, { forwardRef } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const TextEditor = forwardRef(({ label, style, rows, value, readOnly, placeholder, modules }, ref) => {
    return (
        <div className="form-group" style={{ height: '250px', ...style }}>
            <label htmlFor="exampleInputEmail1">{label}</label>
            <ReactQuill style={{ height: readOnly ? '90%' : "70%" }} value={value} modules={modules} rows={rows} placeholder={placeholder} ref={ref} readOnly={readOnly} />
        </div>
    )
})

export default TextEditor;