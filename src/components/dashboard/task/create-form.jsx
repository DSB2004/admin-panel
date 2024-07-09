import React, { useRef, useState } from 'react'
import Input from '../../../layouts/form/input'
import TextEditor from "../../../layouts/form/text-editor"
import Button from '../../../layouts/form/button'
import Dropdown from '../../../layouts/form/dropdown'
import MultiSelect from '../../../layouts/form/multiSelect'
import Task from '../../../assets/task.json'
import { Dialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { CREATE_TASK } from '../../../provider/reducers/task.reducer'
import { RiLoader2Fill } from "react-icons/ri";
export default function CreateForm({ showModal, dispatch, getData }) {

    const [alertMsg, update_msg] = useState('');
    const description = useRef();
    const title = useRef();
    const start_data = useRef();
    const end_data = useRef();
    const status = useRef();
    const priority = useRef();
    const assignto = useRef();
    const assignby = useRef();
    const DISPATCH_REDUX = useDispatch();

    const COMPANY_STATE = useSelector(state => state.Company)


    const handleSubmit = async (e) => {
        e.preventDefault();
        update_msg(<RiLoader2Fill className='loader' />)
        try {
            const task_data =
            {
                "Task_title": title.current.value,
                "Description": description.current.value,
                "Start_Date": start_data.current.value,
                "End_Date": end_data.current.value,
                "Status": status.current.getValue()[0].value,
                "Priority": priority.current.getValue()[0].value,
                "Assigned_By_Employee_id": assignby.current.getValue()[0].value,
                "Assigned_To_Employee_id": assignto.current.getValue().map(element => element.value),
            }
            const res = await DISPATCH_REDUX(CREATE_TASK(task_data)).unwrap();
            if (res) {
                dispatch({ type: "CLOSE" });
                getData()
            }
        } catch (err) {
            update_msg(err.message)
        }
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
                    <h3 className="card-title">Add More Task</h3>
                    <div className="card-tools">
                        <button
                            type="button"
                            className="btn btn-tool visible"
                            onClick={() => dispatch({ type: "CLOSE" })}
                            fdprocessedid="kxhf0x"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <Input label="Task Title" ref={title} placeholder="Enter the task title..." type="text" />
                    <TextEditor label="Description" ref={description} placeholder="Enter the description..." rows={20} />
                    <Dropdown label="Assign By" ref={assignby} options={COMPANY_STATE.employee_list} />

                    <MultiSelect label="Assigned To" ref={assignto} options={COMPANY_STATE.employee_list} />
                    <div className="row">
                        <div className="col-md-6">
                            <Dropdown label="Status" ref={status} options={Task.status} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown label="Priority" ref={priority} options={Task.priority} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Start Date" ref={start_data} placeholder="Enter the start date..." type="date" />
                        </div>
                        <div className="col-md-6">
                            <Input label="End Date" ref={end_data} placeholder="Enter the end date..." type="date" />
                        </div>
                    </div>

                    <div className="flex-center">
                        <Button text="Submit" type="submit" />
                    </div>
                </form>
                <p className='alert-message margin-20'>{alertMsg}</p>
            </div>
        </Dialog >
    )
}
