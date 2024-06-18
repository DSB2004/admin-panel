import React, { forwardRef } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const TextArea = forwardRef(({ label, rows, placeholder }, ref) => {
    return (
        <div className="form-group" style={{ height: '200px' }}>
            <label htmlFor="exampleInputEmail1">{label}</label>
            <ReactQuill style={{ height: '60%' }} rows={rows} placeholder={placeholder} ref={ref} />
        </div>
    )
})

export default TextArea;