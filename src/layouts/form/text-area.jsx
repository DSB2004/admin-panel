import React, { forwardRef } from 'react'

const TextArea = forwardRef(({ placeholder, rows, name }, ref) => {
    return (
        <textarea name={name} placeholder={placeholder} rows={rows} className="form-control">
        </textarea>
    )
})


export default TextArea;