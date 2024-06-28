import React, { useEffect, useMemo, useRef, useState } from 'react';
import Dropdown from '../../../../layouts/form/dropdown';
import Input from '../../../../layouts/form/input';
import Button from '../../../../layouts/form/button';
import Dialog from '@mui/material/Dialog';
import EMPLOYEE_CONTENT from '../../../../assets/employee.json';
import GetCredentials from "../../../../utils/get_credentials.util"
import { SEARCH_EMPLOYEE } from '../../../../provider/reducers/employee.reducer';
import { RiLoader2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
export default function EditForm({ showModal, toggleModal, emp_id, page }) {

    const [updateMsg, update_msg] = useState('');
    const [disableInput, toggleDisable] = useState();

    // for office use
    const employee_name = useRef();
    const employee_email = useRef();
    const employee_designation = useRef();
    const employee_department = useRef();
    const employee_privation_period = useRef();
    const employee_status = useRef();
    const employee_reporting_manager = useRef();

    // contact info
    const employee_phone_no = useRef();
    const employee_whatsapp = useRef();
    const employee_linkedin = useRef();
    const employee_skype = useRef();
    const employee_personal_email = useRef();
    const emergency_contact_name = useRef();
    const emergency_contact_number = useRef();
    const emergency_contact_relation = useRef();

    // address
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
    // other
    const employee_gender = useRef();
    const employee_marital_status = useRef();

    const [EDIT_EMPLOYEE, SET_EMPLOYEE] = useState();




    const DISPATCH_ACTION = useDispatch();

    const handleEmployeeEdit = async (id) => {
        if (id) {

            const response = await DISPATCH_ACTION(SEARCH_EMPLOYEE({ ID: id })).unwrap();
            SET_EMPLOYEE(response[0])
            console.log(response);
        }
    };

    useEffect(() => {
        handleEmployeeEdit(emp_id);
    }, [emp_id]);





    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            update_msg(<RiLoader2Fill className='loader' />)
            const EMPLOYEE_DETAILS = {
                auto_emp_id: emp_id,
                name: employee_name.current.value,
                email: employee_email.current.value,
                address: permanent_address1.current.value,
                address2: permanent_address2.current.value,
                pin: permanent_pincode.current.value,
                city_id: permanent_city.current.value,
                state_id: permanent_state.current.getValue()[0].value,
                country_id: permanent_country.current.getValue()[0].value,
                PEaddress: personal_address1.current.value,
                PEaddress2: personal_address2.current.value,
                PEpin: personal_pincode.current.value,
                PEcountry_id: personal_country.current.getValue()[0].value,
                PEcity_id: personal_city.current.value,
                PEstate_id: personal_state.current.getValue()[0].value,
                company_id: GetCredentials().panelid,
                gender: employee_gender.current.getValue()[0].value,
                marital_status: employee_marital_status.current.getValue()[0].value,
                phone_no: Number(employee_phone_no.current.value),
                whatsapp: Number(employee_whatsapp.current.value),
                linkedin: employee_linkedin.current.value,
                skype: employee_skype.current.value,
                personal_email: employee_personal_email.current.value,
                Econ_per_name: emergency_contact_name.current.value,
                Econ_per_number: Number(emergency_contact_number.current.value),
                Econ_per_relation: emergency_contact_relation.current.getValue()[0].value,
                designation_id: employee_designation.current.getValue()[0].value,
                department_id: employee_department.current.getValue()[0].value,
                privation_period: employee_privation_period.current.value,
                reporting_to: employee_reporting_manager.current.getValue()[0].value
            };
            // const ENCRYTED_EMPLOYEE_DETAILS = await EncryptData(EMPLOYEE_DETAILS);
            console.log("Edited Data");

            // const res = await dispatch(CREATE_EMPLOYEE(ENCRYTED_EMPLOYEE_DETAILS)).unwrap();
            // if (res.body.error) {
            //     update_msg("Error Happened!! Check Field")
            // }
            // else {
            //     toggleModal()
            // }

        }
        catch (err) {
            update_msg("All Fields are required")
        }
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
                    <h3 className="card-title">Edit Employee </h3>

                    <div className="card-tools">
                        <button
                            type="button"
                            className="btn btn-tool visible"
                            onClick={() => toggleModal()}
                            fdprocessedid="kxhf0x"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                {/* /.card-header */}
                <form className="card-body" onSubmit={handleSubmit}>
                    <h3 className="card-sub-title">Personal Info</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input value={emp_id} label="Employee ID" placeholder="Auto Generated ID" type="text" disable={true} />
                        </div>
                        <div className="col-md-6">
                            <Input value={EDIT_EMPLOYEE && EDIT_EMPLOYEE["Employee Name"]} ref={employee_name} label="Employee Name" placeholder="Enter the employee name..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input value={EDIT_EMPLOYEE && EDIT_EMPLOYEE["Employee Email"]} ref={employee_email} label="Employee Email" placeholder="Enter the employee email..." type="email" />
                        </div>
                        <div className="col-md-6">
                            <Input value={EDIT_EMPLOYEE && EDIT_EMPLOYEE["Privation Period"]} ref={employee_privation_period} label="Privation Period" placeholder="Enter the employee privation period..." type="date" />
                        </div>
                        <div className="col-md-6">
                            <Dropdown value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.designation_id} ref={employee_designation} label="Designation" options={EMPLOYEE_CONTENT.designation} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.department_id} ref={employee_department} label="Department" options={EMPLOYEE_CONTENT.department} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.reporting_to} ref={employee_reporting_manager} label="Reporting To" options={EMPLOYEE_CONTENT.manager} />
                        </div>
                    </div>


                    <h3 className="card-sub-title">Address</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={permanent_address1} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.address} label="Permanent Address 1" placeholder="Enter employee's permanent address..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={permanent_address2} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.address2} label="Permanent Address 2" placeholder="Enter employee's permanent address..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={permanent_pincode} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.pin} label="Permanent Pincode" placeholder="Enter employee's permanent pincode..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={permanent_city} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.city_id} label="Permanent City" placeholder="Enter employee's permanent city..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={permanent_state} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.state_id} label="Permanent State" options={EMPLOYEE_CONTENT.state} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={permanent_country} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.country_id} label="Permanent Country" options={EMPLOYEE_CONTENT.country} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={personal_address1} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.address} label="Personal Address 1" placeholder="Enter employee personal address..." type="text" disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_address2} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.address2} label="Personal Address 2" placeholder="Enter employee personal address..." type="text" disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_pincode} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.pin} label="Personal Pincode" placeholder="Enter employee pincode..." type="text" disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_city} label="Personal City" value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.city_id} placeholder="Enter employee city..." type="text" disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={personal_state} label="Personal State" value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.state_id} options={EMPLOYEE_CONTENT.state} disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={personal_country} label="Personal Country" value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.country_id} options={EMPLOYEE_CONTENT.country} disable={disableInput} />
                        </div>
                    </div>



                    <h3 className="card-sub-title">Contact Info</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={employee_phone_no} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.phone_no} label="Phone Number" placeholder="Enter employee's phone no..." type="tel" pattern="[0-9]{10}" title="Enter a Valid Number" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_whatsapp} label="WhatsApp"
                                placeholder="Enter employee's whatsapp no..." value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.whatsapp} type="tel" pattern="[0-9]{10}" title="Enter a Valid Number" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_linkedin} label="LinkedIn" value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.linkedin} placeholder="Enter employee's linkedin profile..." type="url" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_skype} label="Skype" value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.skype} placeholder="Enter employee's skype ID..." type="text" pattern="^link:.*" title="The address must begin with 'link:' " />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_personal_email} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.personal_email} label="Personal Email" placeholder="Enter employee's personal email" type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={emergency_contact_name} value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.Econ_per_name} label="Emergency Contact Name" placeholder="Enter employee's emergency contact name..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={emergency_contact_number}
                                label="Emergency Contact Phone"
                                placeholder="Enter employee's emergency contact number..."
                                type="tel" pattern="[0-9]{10}" title="Enter a Valid Number"
                                value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.Econ_per_number} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={emergency_contact_relation}
                                value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.Econ_per_relation}
                                label="Emergency Contact Relation" options={EMPLOYEE_CONTENT.relations} />
                        </div>
                    </div>



                    <h3 className="card-sub-title">Others</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Dropdown ref={employee_marital_status}
                                value={EDIT_EMPLOYEE && EDIT_EMPLOYEE.marital_status}
                                label="Marital Status" options={EMPLOYEE_CONTENT.marital_status} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={employee_gender} value={EMPLOYEE_CONTENT.gender} label="Gender" options={EMPLOYEE_CONTENT.gender} />
                        </div>
                    </div>



                    <div className="flex-center">
                        <Button text="Submit" type="submit" onClick={() => handleSubmit()} />
                    </div>

                </form>
                <p className='alert-message margin-20'>{updateMsg}</p>
            </div>
        </Dialog>
    );
}
