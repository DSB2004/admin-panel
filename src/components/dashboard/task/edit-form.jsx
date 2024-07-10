import React, { useRef } from 'react'
import Input from '../../../layouts/form/input'
import Button from '../../../layouts/form/button'
import Dropdown from '../../../layouts/form/dropdown'
import MultiSelect from '../../../layouts/form/multi-select'
import data from "../../../assets/test.json"
import { Dialog } from '@mui/material'
import { useSelector } from 'react-redux'
import TextEditor from '../../../layouts/form/text-editor'

export default function EditForm({ showModal, toggleModal, task_id }) {

    const description = useRef();
    const title = useRef();
    const start_data = useRef();
    const end_data = useRef();
    const status = useRef();
    const priority = useRef();
    const assignto = useRef();


    const TASK_STATE = useSelector((state) => state.Task.content.filter(element => element.id === task_id))[0];

    const HandleTaskEdit = (e) => {
        e.preventDefault();
        console.log(TASK_STATE)
    }
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
                    <h3 className="card-title">Edit Task</h3>
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
                <form className="card-body" onSubmit={HandleTaskEdit}>
                    <Input label="Task ID" value={task_id} placeholder="Task ID" type="text" ref={title} disable={true} />
                    <Input label="Task Title" value={TASK_STATE && TASK_STATE.title} autoComplete={true} placeholder="Enter the task title..." type="text" ref={title} />
                    <TextEditor label="Description" value={TASK_STATE && TASK_STATE.description} placeholder="Enter the description..." rows={5} ref={description} />
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
                </form>
            </div>
        </Dialog >
    )
}
