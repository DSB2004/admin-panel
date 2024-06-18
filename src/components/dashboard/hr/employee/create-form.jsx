import React, { useEffect, useMemo, useRef, useState } from 'react';
import Dropdown from '../../../../layouts/form/dropdown';
import Input from '../../../../layouts/form/input';
import Button from '../../../../layouts/form/button';
import Checkbox from '../../../../layouts/form/check-box';
import Dialog from '@mui/material/Dialog';
import EncryptData from '../../../../utils/encrypt_data.util';
import { DEV_MODE } from '../../../../config/index.config';
import EMPLOYEE_CONTENT from '../../../../assets/employee.json';
import GetCredentials from "../../../../utils/get_credentials.util"
import { CREATE_EMPLOYEE } from '../../../../provider/reducers/employee.reducer';
import { RiLoader2Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
export default function CreateForm({ showModal, toggleModal }) {
    const dispatch = useDispatch();
    const [updateMsg, update_msg] = useState('');
    const [disableInput, toggleDisable] = useState();
    // for office use
    const employee_name = useRef();
    // const employee_id = useRef();
    const employee_email = useRef();
    const employee_password = useRef();
    const employee_designation = useRef();
    const employee_department = useRef();
    const employee_privation_period = useRef();
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

    const handleToggle = (e) => {
        if (e.target.checked) {
            toggleDisable(e.target.checked)
            personal_address1.current.value = permanent_address1.current.value;
            personal_address2.current.value = permanent_address2.current.value;
            personal_pincode.current.value = permanent_pincode.current.value;
            personal_city.current.value = permanent_city.current.value;
            personal_country.current.setValue(permanent_country.current.getValue());
            personal_state.current.setValue(permanent_state.current.getValue());
        } else {
            toggleDisable(e.target.checked)
            personal_address1.current.value = '';
            personal_address2.current.value = '';
            personal_pincode.current.value = '';
            personal_city.current.value = '';
            personal_country.current.clearValue();
            personal_state.current.clearValue();
        }

    }

    const runtest = (e) => {
        if (DEV_MODE && e.target.checked) {
            employee_name.current.value = EMPLOYEE_CONTENT.test.name;
            employee_email.current.value = EMPLOYEE_CONTENT.test.email;
            employee_password.current.value = EMPLOYEE_CONTENT.test.password;
            employee_designation.current.setValue(EMPLOYEE_CONTENT.test.designation_id)
            employee_department.current.setValue(EMPLOYEE_CONTENT.test.department_id)
            employee_privation_period.current.value = EMPLOYEE_CONTENT.test.privation_period;
            employee_phone_no.current.value = EMPLOYEE_CONTENT.test.phone_no;
            employee_whatsapp.current.value = EMPLOYEE_CONTENT.test.whatsapp;
            employee_linkedin.current.value = EMPLOYEE_CONTENT.test.linkedin;
            employee_skype.current.value = EMPLOYEE_CONTENT.test.skype;
            employee_personal_email.current.value = EMPLOYEE_CONTENT.test.personal_email;
            emergency_contact_name.current.value = EMPLOYEE_CONTENT.test.Econ_per_name;
            emergency_contact_number.current.value = EMPLOYEE_CONTENT.test.Econ_per_number;
            permanent_address1.current.value = EMPLOYEE_CONTENT.test.address;
            permanent_address2.current.value = EMPLOYEE_CONTENT.test.address2;
            permanent_pincode.current.value = EMPLOYEE_CONTENT.test.pin;
            permanent_city.current.value = EMPLOYEE_CONTENT.test.city_id;
            permanent_country.current.setValue(EMPLOYEE_CONTENT.test.country_id);
            permanent_state.current.setValue(EMPLOYEE_CONTENT.test.state_id);
            employee_gender.current.setValue(EMPLOYEE_CONTENT.test.gender);
            employee_marital_status.current.setValue(EMPLOYEE_CONTENT.test.marital_status);
            employee_reporting_manager.current.setValue(EMPLOYEE_CONTENT.test.reporting_to);
            emergency_contact_relation.current.setValue(EMPLOYEE_CONTENT.test.Econ_per_relation)
        } else {
            employee_name.current.value = '';
            employee_email.current.value = '';
            employee_password.current.value = '';
            employee_designation.current.clearValue();
            employee_department.current.clearValue();
            employee_privation_period.current.value = '';
            employee_phone_no.current.value = '';
            employee_whatsapp.current.value = '';
            employee_linkedin.current.value = '';
            employee_skype.current.value = '';
            employee_personal_email.current.value = '';
            emergency_contact_name.current.value = '';
            emergency_contact_number.current.value = '';
            permanent_address1.current.value = '';
            permanent_address2.current.value = '';
            permanent_pincode.current.value = '';
            permanent_city.current.value = '';
            permanent_country.current.clearValue();
            permanent_state.current.clearValue();
            employee_gender.current.clearValue();
            employee_marital_status.current.clearValue();
            employee_reporting_manager.current.clearValue();
            emergency_contact_relation.current.clearValue();
        }

    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            update_msg(<RiLoader2Fill className='loader' />)
            const EMPLOYEE_DETAILS = {
                name: employee_name.current.value,
                email: employee_email.current.value,
                password: employee_password.current.value,
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
            const ENCRYTED_EMPLOYEE_DETAILS = await EncryptData(EMPLOYEE_DETAILS);
            console.log(ENCRYTED_EMPLOYEE_DETAILS)
            const res = await dispatch(CREATE_EMPLOYEE(ENCRYTED_EMPLOYEE_DETAILS)).unwrap();
            if (res.body.error) {
                update_msg("Error Happened!! Check Field")
            }
            else {
                toggleModal(false)
            }

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
                <form className="card-body" onSubmit={handleSubmit}>
                    <h3 className="card-sub-title">Personal Info</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Employee ID" placeholder="Auto Generated ID" type="text" disable={true} />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_name} label="Employee Name" placeholder="Enter the employee name..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_email} label="Employee Email" placeholder="Enter the employee email..." type="email" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_password} label="Employee Password" placeholder="Enter the employee password..." type="password" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_privation_period} label="Privation Period" placeholder="Enter the employee privation period..." type="date" />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={employee_designation} label="Designation" options={EMPLOYEE_CONTENT.designation} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={employee_department} label="Department" options={EMPLOYEE_CONTENT.department} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={employee_reporting_manager} label="Reporting To" options={EMPLOYEE_CONTENT.manager} />
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
                            <Dropdown ref={permanent_state} label="Permanent State" options={EMPLOYEE_CONTENT.state} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={permanent_country} label="Permanent Country" options={EMPLOYEE_CONTENT.country} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={personal_address1} label="Personal Address 1" placeholder="Enter employee personal address..." type="text" disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_address2} label="Personal Address 2" placeholder="Enter employee personal address..." type="text" disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_pincode} label="Personal Pincode" placeholder="Enter employee pincode..." type="text" disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_city} label="Personal City" placeholder="Enter employee city..." type="text" disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={personal_state} label="Personal State" options={EMPLOYEE_CONTENT.state} disable={disableInput} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={personal_country} label="Personal Country" options={EMPLOYEE_CONTENT.country} disable={disableInput} />
                        </div>
                    </div>

                    <Checkbox placeholder="Same as Permanent address" onChange={handleToggle} />

                    <h3 className="card-sub-title">Contact Info</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={employee_phone_no} label="Phone Number" placeholder="Enter employee's phone no..." type="tel" pattern="[0-9]{10}" title="Enter a Valid Number" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_whatsapp} label="WhatsApp"
                                placeholder="Enter employee's whatsapp no..." type="tel" pattern="[0-9]{10}" title="Enter a Valid Number" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_linkedin} label="LinkedIn" placeholder="Enter employee's linkedin profile..." type="url" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_skype} label="Skype" placeholder="Enter employee's skype ID..." type="text" pattern="^link:.*" title="The address must begin with 'link:' " />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_personal_email} label="Personal Email" placeholder="Enter employee's personal email" type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={emergency_contact_name} label="Emergency Contact Name" placeholder="Enter employee's emergency contact name..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={emergency_contact_number}
                                label="Emergency Contact Phone"
                                placeholder="Enter employee's emergency contact number..."
                                type="tel" pattern="[0-9]{10}" title="Enter a Valid Number" />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={emergency_contact_relation} label="Emergency Contact Relation" options={EMPLOYEE_CONTENT.relations} />
                        </div>
                    </div>



                    <h3 className="card-sub-title">Others</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Dropdown ref={employee_marital_status} label="Marital Status" options={EMPLOYEE_CONTENT.marital_status} />
                        </div>
                        <div className="col-md-6">
                            <Dropdown ref={employee_gender} label="Gender" options={EMPLOYEE_CONTENT.gender} />
                        </div>
                    </div>

                    {(DEV_MODE === 'true') ? <>
                        <input type="checkbox" onChange={runtest} />
                    </> : <></>
                    }


                    <div className="flex-center">
                        <Button text="Submit" type="submit" onClick={() => handleSubmit()} />
                    </div>

                </form>
                <p className='alert-message margin-20'>{updateMsg}</p>
            </div>
        </Dialog>
    );
}
