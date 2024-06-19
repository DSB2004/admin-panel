import React, { forwardRef } from 'react'

const TextArea = forwardRef(({ placeholder, rows }, ref) => {
    return (
        <textarea placeholder={placeholder} rows={rows} className="form-control">
        </textarea>
    )
})


export default TextArea;