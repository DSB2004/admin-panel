import React, { useRef } from 'react'
import { Dialog } from '@mui/material'
import Button from '../../../layouts/form/button'
import Input from '../../../layouts/form/input'
import Dropdown from '../../../layouts/form/dropdown'
export default function CreateForm({ showModal, DISPATCH }) {
    const employee_name = useRef();
    const employee_id = useRef();
    const employee_email = useRef();
    const employee_password = useRef();
    const employee_designation = useRef();
    const employee_department = useRef();
    const employee_privation_period = useRef();


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
                    <h3 className="card-title">Add a new Campaign</h3>
                    <div className="card-tools">
                        <button
                            type="button"
                            className="btn btn-tool visible"
                            onClick={() => DISPATCH({ type: "CLOSE" })}
                            fdprocessedid="kxhf0x"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={employee_id} label="Employee ID" placeholder="Enter the employee ID..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_name} label="Employee Name" placeholder="Enter the employee name..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_email} label="Employee Email" placeholder="Enter the employee email..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_password} label="Employee Password" placeholder="Enter the employee password..." type="password" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_privation_period} label="Privation Period" placeholder="Enter the employee privation period..." type="text" />
                        </div>

                       
                        <div className="col-md-6">
                            <Dropdown ref={employee_designation} label="Designation" options={EMPLOYEE_CONTENT.designation} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={employee_department} label="Department" options={EMPLOYEE_CONTENT.department} />
                        </div>
                    </div>


                </div>
            </div>
        </Dialog>
    )
}
