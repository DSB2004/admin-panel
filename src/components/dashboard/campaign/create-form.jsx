import React, { useRef } from 'react'
import { Dialog } from '@mui/material'
import Button from '../../../layouts/form/button'
import Input from '../../../layouts/form/input'
import Dropdown from '../../../layouts/form/dropdown'
export default function CreateForm({ showModal, DISPATCH }) {
    const employee_phone_no = useRef();
    const employee_whatsapp = useRef();
    const employee_linkedin = useRef();
    const employee_skype = useRef();
    const employee_personal_email = useRef();
    const emergency_contact_name = useRef();
    const emergency_contact_number = useRef();

    // address
    const sameAddress = useRef();
    const permanent_address1 = useRef();
    const permanent_address2 = useRef();
    const personal_address1 = useRef();
    const personal_address2 = useRef();
    const personal_state = useRef();
    const permanent_state = useRef();
    const permanent_pincode = useRef();
    const personal_pincode = useRef();
    const permanent_city = useRef();
    const personal_city = useRef();
    const permanent_country = useRef();
    const personal_country = useRef();
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
                    {/* </div>
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
                            <Input ref={employee_status} label="Employee Status" placeholder="Enter the employee Status..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={employee_designation} label="Designation" options={EMPLOYEE_CONTENT.designation} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={employee_department} label="Department" options={EMPLOYEE_CONTENT.department} />
                        </div>
                    </div>
                    \
                */}
                </div>
            </div>
        </Dialog>
    )
}
