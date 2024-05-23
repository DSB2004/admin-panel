import React from 'react'
// import Dropdown from "../../../layouts/form/dropdown"
// import Dropdown from '../../../layouts/form/dropDown';
import Dropdown from "../../../layouts/form/dropdown/index"
import Input from '../../../layouts/form/input'
import Button from '../../../layouts/form/button'
import Dialog from '@mui/material/Dialog';
import Data from "../../../assets/test.json"

export default function EmployeeForm({ showModal, toggleModal }) {
    return (
        <Dialog
            open={showModal}
            maxWidth="lg"
            fullWidth={true}
            sx={{
                '& .MuiPaper-root': {
                    width: '80%',
                    maxWidth: 'none'
                },
            }}>
            <div className="card card-default">
                <div className="card-header">
                    <h3 className="card-title">Add More Employee</h3>
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
                    <h3 className="card-sub-title">Personal Info</h3>
                    {/* <Input label="Task Title" placeholder="Enter the task title..." type="text" /> */}
                    {/* <TextArea label="Description" placeholder="Enter the description..." rows={5} /> */}
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Employee ID" placeholder="Enter the Employee ID..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Employee Name" placeholder="Enter the Employee name..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Employee Email" placeholder="Enter the Employee email..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Employee Password" placeholder="Enter the Employee password..." type="password" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Address" placeholder="Enter the Employee address..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Pincode" placeholder="Enter the Employee pincode..." type="password" />
                        </div>
                        <div className="col-md-6">
                            <Input label="City" placeholder="Enter the Employee city..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Country" placeholder="Enter the Employee country..." type="text" />
                        </div>
                    </div>

                    <h3 className="card-sub-title">contact Info</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Phone Number" placeholder="Enter the Employee phone no..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="WhatsApp" placeholder="Enter the Employee whatsapp no..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="LinkedIn" placeholder="Enter the Employee linkedin profile..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Skype" placeholder="Enter the Employee skype ID..." type="text" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Dropdown label="Designation" options={Data.option} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown label="Department" options={Data.option} />
                        </div>
                    </div>

                    <div className="flex-center">
                        <Button text="Submit" onClick={() => console.log("Hello World")} />
                    </div>
                </div >
            </div >
        </Dialog >

    )
}
