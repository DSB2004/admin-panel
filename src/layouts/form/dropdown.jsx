import React, { forwardRef } from 'react'
import Select from 'react-select';

const Dropdown = forwardRef(({ label, options = [] }, ref) => {

    const customStyles = {
        control: (provided) => ({
            ...provided,
            margin: '0px 0 40px 0',
            width: "100%"
        })
    };

    return (
        <>
            <label htmlFor="exampleInputEmail1">{label}</label>
            <Select options={options} styles={customStyles} ref={ref} />
        </>
    )
})
export default Dropdown;
