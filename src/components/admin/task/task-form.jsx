import React, { useState, useRef } from 'react'
// import Dropdown from "../../../layouts/form/dropdown"
import Input from '../../../layouts/form/input'
import TextArea from '../../../layouts/form/text-area'
import Button from '../../../layouts/form/button'
import Select from 'react-select';
// import MultiSelect from '../../../layouts/form/multi-select'
import { Dialog } from '@mui/material'
export default function TaskForm({ showModal, toggleModal }) {
    const [testVal, setVal] = useState("")
    // const testRef = useRef();
    const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
        { value: '4', label: 'Option 4' },
        { value: '5', label: 'Option 5' },
        { value: '4', label: 'Option 4' },
        { value: '5', label: 'Option 5' },
        { value: '4', label: 'Option 4' },
        { value: '5', label: 'Option 5' },
        { value: '4', label: 'Option 4' },
        { value: '5', label: 'Option 5' }
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            margin: '0px 0 40px 0',
        })
    };
    return (
        <Dialog
            open={showModal}
            maxWidth="lg"
            fullScreen={true}
            fullWidth={true}
            sx={{
                '& .MuiPaper-root': {
                    width: '80%',
                    height: 650,
                    // You can use percentages or a fixed value like '800px'
                    maxWidth: 'none' // Override the maxWidth to ensure it applies
                },
            }}>
            <div className="card card-default">
                <div className="card-header">
                    <h3 className="card-title">Add More Task</h3>
                    <div className="card-tools">
                        <button
                            type="button"
                            className="btn btn-tool visible"
                            onClick={() => toggleModal(false)}
                            fdprocessedid="kxhf0x"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <Input label="Task Title" placeholder="Enter the task title..." type="text" />
                    <TextArea label="Description" placeholder="Enter the description..." rows={5} />
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Start Date" placeholder="Enter the start date..." type="date" />
                        </div>
                        <div className="col-md-6">

                            <Input label="End Date" placeholder="Enter the end date..." type="date" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1">Status</label>
                            <Select options={options} styles={customStyles} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1">Priority</label>
                            <Select options={options} styles={customStyles} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1">Assigned To</label>
                            <Select
                                // ref={selectRef}
                                options={options}
                                isMulti
                                styles={customStyles}
                            />
                        </div>
                    </div>
                    <div className="flex-center">
                        <Button text="Submit" onClick={() => {
                            console.log(testVal)
                        }}
                        />
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
