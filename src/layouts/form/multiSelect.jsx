import React from 'react'
import Select from 'react-select';
export default function MultiSelect({ label, options = [] }) {

    const customStyles = {
        control: (provided) => ({
            ...provided,
            margin: '0px 0 40px 0',
        })
    };

    return (
        <>
            <label htmlFor="exampleInputEmail1">{label}</label>
            <Select options={options} styles={customStyles} isMulti />
        </>
    )


}
