import React, { useRef } from 'react'
import Input from '../../../layouts/form/input'
import TextEditor from "../../../layouts/form/text-editor"
import Button from '../../../layouts/form/button'
import Dropdown from '../../../layouts/form/dropdown'
import MultiSelect from '../../../layouts/form/multiSelect'
import data from "../../../assets/test.json"
import { Dialog } from '@mui/material'
export default function CreateForm({ showModal, toggleModal }) {
    const description = useRef();
    const title = useRef();
    const start_data = useRef();
    const end_data = useRef();
    const status = useRef();
    const priority = useRef();
    const assignto = useRef();
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
                    maxWidth: 'none'
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
                <div className="card-body">
                    <Input label="Task ID" autoComplete={true} placeholder="Auto Generated" type="text" />
                    <Input label="Task Title" ref={title} autoComplete={true} placeholder="Enter the task title..." type="text" />
                    <TextEditor label="Description" ref={description} placeholder="Enter the description..." rows={20} />
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Start Date" ref={start_data} placeholder="Enter the start date..." type="date" />
                        </div>
                        <div className="col-md-6">
                            <Input label="End Date" ref={end_data} placeholder="Enter the end date..." type="date" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Dropdown label="Status" ref={status} options={data.option} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown label="Priority" ref={priority} options={data.option} />
                        </div>
                    </div>
                    <MultiSelect label="Assigned To" ref={assignto} options={data.option} />
                    <div className="flex-center">
                        <Button text="Submit" type="submit" />
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
