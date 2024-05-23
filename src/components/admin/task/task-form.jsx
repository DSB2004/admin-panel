import React, { useState, useRef } from 'react'


import Input from '../../../layouts/form/input'
import TextArea from '../../../layouts/form/text-area'
import Button from '../../../layouts/form/button'
import Dropdown from '../../../layouts/form/dropDown'
import MultiSelect from '../../../layouts/form/multiSelect'
import data from "../../../assets/test.json"
import { Dialog } from '@mui/material'
export default function TaskForm({ showModal, toggleModal }) {


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
                            <Dropdown label="Status" options={data.option} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown label="Priority" options={data.option} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <MultiSelect label="Assigned To" options={data.option} />
                        </div>
                    </div>
                    <div className="flex-center">
                        <Button text="Submit" onClick={() => {
                            // console.log(testVal)
                        }}
                        />
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
