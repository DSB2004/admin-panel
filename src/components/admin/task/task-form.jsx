import React from 'react'
import Dropdown from "../../../layouts/form/dropdown"
import Input from '../../../layouts/form/input'
import TextArea from '../../../layouts/form/text-area'
import Button from '../../../layouts/form/button'
import MultiSelect from '../../../layouts/form/multi-select'
import { useNavigate } from 'react-router-dom'

export default function TaskForm() {
    const navigate = useNavigate()
    return (
        <div className="card card-default">
            <div className="card-header">
                <h3 className="card-title">Add More Task</h3>
                <div className="card-tools">
                    <button
                        type="button"
                        className="btn btn-tool visible"
                        onClick={() => navigate(-1)}
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
                        <Dropdown label="Status" option={[]} />
                    </div>
                    <div className="col-md-6">
                        <Dropdown label="Status" option={[]} />
                    </div>
                </div>
                <div className="row">
                    {/* <MultiSelect /> */}
                </div>
                <div className="flex-center">
                    <Button text="Submit" onClick={() => console.log("Hello World")} />
                </div>
            </div>
        </div>
    )
}
