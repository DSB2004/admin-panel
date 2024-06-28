import React, { forwardRef } from 'react'
import Select from 'react-select';

const Dropdown = forwardRef(({ label, name, options = [], disable, value }, ref) => {

    const customStyles = {
        control: (provided) => ({
            ...provided,
            margin: '0px 0 20px 0',
            width: '100%',
            height: '30px'
        }),
        valueContainer: (provided) => ({
            ...provided,
            height: '30px',
            padding: '0 8px'
        }),
        input: (provided) => ({
            ...provided,
            margin: '0px'
        })
    };

    return (
        <>
            <label htmlFor="exampleInputEmail1">{label}</label>
            <Select name={name} options={options} styles={customStyles} value={value} ref={ref} isDisabled={disable} />
        </>
    )
})
export default Dropdown;
