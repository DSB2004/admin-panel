import React, { useState, useRef } from 'react'
import Dropdown from "../../../layouts/form/dropdown"
import Input from '../../../layouts/form/input'
import TextArea from '../../../layouts/form/text-area'
import Button from '../../../layouts/form/button'
import MultiSelect from '../../../layouts/form/multi-select'
import { Dialog } from '@mui/material'
export default function TaskForm({ showModal, toggleModal }) {
    const [testVal, setVal] = useState("")
    const testRef = useRef();
    return (
        <Dialog
            open={showModal}
            maxWidth="lg" // You can set it to 'xs', 'sm', 'md', 'lg', 'xl' as per your need
            fullWidth={true}
            sx={{
                '& .MuiPaper-root': {
                    width: '80%', // You can use percentages or a fixed value like '800px'
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
                            <Dropdown label="Status" options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]} onChange={setVal} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown label="Priority" options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]} onChange={setVal} />
                        </div>
                    </div>
                    <div className="row">

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
