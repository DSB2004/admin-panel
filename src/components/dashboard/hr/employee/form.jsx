import React, { useRef, useState } from 'react'
import Dropdown from "../../../../layouts/form/dropdown"
import Input from '../../../../layouts/form/input'
import Button from '../../../../layouts/form/button'
import Checkbox from '../../../../layouts/form/check-box'
import Dialog from '@mui/material/Dialog';
import Data from "../../../../assets/test.json"


export default function Form({ showModal, toggleModal }) {

    // for address
    const sameAddress = useRef();

    const permanent_address1 = useRef();
    const permanent_address2 = useRef();

    const personal_address1 = useRef();
    const personal_address2 = useRef();

    const permanent_pincode = useRef();
    const personal_pincode = useRef();

    const permanent_city = useRef();
    const personal_city = useRef();

    const permanent_country = useRef();
    const personal_country = useRef();

    const handleToggle = () => {
        if (sameAddress.current.checked) {
            personal_address1.current.value = permanent_address1.current.value;
            personal_address2.current.value = permanent_address2.current.value;
            personal_pincode.current.value = permanent_pincode.current.value;
            personal_city.current.value = permanent_city.current.value;
            personal_country.current.value = permanent_country.current.value;

        } else {
            personal_address1.current.value = '';
            personal_address2.current.value = '';
            personal_pincode.current.value = '';
            personal_city.current.value = '';
            personal_country.current.value = '';
        }
        personal_address1.current.disabled = sameAddress.current.checked;
        personal_address2.current.disabled = sameAddress.current.checked;
        personal_pincode.current.disabled = sameAddress.current.checked;
        personal_city.current.disabled = sameAddress.current.checked;
        personal_country.current.disabled = sameAddress.current.checked;
    }




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
                    <h3 className="card-title">Add More employee</h3>
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
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Employee ID" placeholder="Enter the employee ID..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Employee Name" placeholder="Enter the employee name..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Employee Email" placeholder="Enter the employee email..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Employee Password" placeholder="Enter the employee password..." type="password" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Privation Period" placeholder="Enter the employee privation period..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Company ID" placeholder="Enter the employee company ID..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Dropdown label="Designation" options={Data.option} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown label="Department" options={Data.option} />
                        </div>
                    </div>

                    <h3 className="card-sub-title">Address</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={permanent_address1} label="Permanent Address 1" placeholder="Enter employee's permanent address..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={permanent_address2} label="Permanent Address 2" placeholder="Enter employee's permanent address..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={permanent_pincode} label="Permanent Pincode" placeholder="Enter employee's permanent pincode..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={permanent_city} label="Permanent City" placeholder="Enter employee's permanent city..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={permanent_country} label="Permanent Country" placeholder="Enter employee's permanent country..." type="text" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={personal_address1} label="Personal Address 1" placeholder="Enter employee personal address..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_address2} label="Personal Address 2" placeholder="Enter employee personal address..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_pincode} label="Personal Pincode" placeholder="Enter employee pincode..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_city} label="Personal City" placeholder="Enter employee city..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_country} label="Personal Country" placeholder="Enter employee country..." type="text" />
                        </div>
                    </div>

                    <Checkbox placeholder="Same as Permanent address" ref={sameAddress} onChange={handleToggle} />

                    <h3 className="card-sub-title">contact Info</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Phone Number" placeholder="Enter employee's phone no..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="WhatsApp" placeholder="Enter employee's whatsapp no..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="LinkedIn" placeholder="Enter employee's  linkedin profile..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Skype" placeholder="Enter employee's skype ID..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Personal Email" placeholder="Enter employee's personal email" type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Emergency Contact Name" placeholder="Enter employee's emergency contact name..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Emergency Contact Phone" placeholder="Enter employee's emergency contact number..." type="text" />
                        </div>

                    </div>

                    <h3 className="card-sub-title">Others</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Martial Status" placeholder="Enter employee's martial status" type="text" />
                        </div>
                        <div className="col-md-6">
                            <Dropdown label="Gender" options={Data.option} />
                        </div>

                    </div>

                    <div className="flex-center">
                        <Button text="Submit" />
                    </div>
                </div >
            </div >
        </Dialog >

    )
}
