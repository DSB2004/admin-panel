import React, { forwardRef } from 'react'

const Checkbox = forwardRef(({ placeholder, value, onChange }, ref) => {
    return (
        <div className="custom-control custom-checkbox">
            <input type="checkbox" name="terms" onChange={onChange} value={value} ref={ref} className="custom-control-input" id="exampleCheck1" />
            <label className="custom-control-label" htmlFor="exampleCheck1">{placeholder}</label>
        </div>
    )
})


export default Checkbox;