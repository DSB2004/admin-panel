import React, { useEffect, useMemo, useRef, useState } from 'react';
import Dropdown from '../../../../layouts/form/dropdown';
import Input from '../../../../layouts/form/input';
import Button from '../../../../layouts/form/button';
import Checkbox from '../../../../layouts/form/check-box';
import Dialog from '@mui/material/Dialog';
import { encryptData } from '../../../../utils/encrypt_data.util';
import { DEV_MODE } from '../../../../config/index.config';
import EMPLOYEE_CONTENT from '../../../../assets/employee.json';
import GetCredentials from "../../../../utils/get_credentials.util"
import { CREATE_EMPLOYEE } from '../../../../provider/reducers/employee.reducer';
import { useDispatch } from 'react-redux';
export default function Form({ showModal, toggleModal }) {
    const dispatch = useDispatch();
    const [updateMsg, setMsg] = useState();
    // for office use
    const employee_name = useRef();
    const employee_id = useRef();
    const employee_email = useRef();
    const employee_password = useRef();
    const employee_designation = useRef();
    const employee_department = useRef();
    const employee_privation_period = useRef();

    // contact info
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

    // other
    const employee_status = useRef();
    const employee_gender = useRef();
    const employee_marital_status = useRef();

    const handleToggle = () => {
        if (sameAddress.current.checked) {
            personal_address1.current.value = permanent_address1.current.value;
            personal_address2.current.value = permanent_address2.current.value;
            personal_pincode.current.value = permanent_pincode.current.value;
            personal_city.current.value = permanent_city.current.value;
            personal_country.current.value = permanent_country.current.value;
            personal_state.current.value = permanent_state.current.value
        } else {
            personal_address1.current.value = '';
            personal_address2.current.value = '';
            personal_pincode.current.value = '';
            personal_city.current.value = '';
            personal_country.current.value = '';
            personal_state.current.value = '';
        }
        personal_address1.current.disabled = sameAddress.current.checked;
        personal_address2.current.disabled = sameAddress.current.checked;
        personal_pincode.current.disabled = sameAddress.current.checked;
        personal_city.current.disabled = sameAddress.current.checked;
        personal_country.current.disabled = sameAddress.current.checked;
        personal_state.current.disabled = sameAddress.current.checked;
    }

    const runtest = (e) => {
        if (DEV_MODE && e.target.checked) {
            employee_id.current.value = EMPLOYEE_CONTENT.test.employee_id;
            employee_name.current.value = EMPLOYEE_CONTENT.test.employee_name;
            employee_email.current.value = EMPLOYEE_CONTENT.test.employee_email;
            employee_password.current.value = EMPLOYEE_CONTENT.test.employee_password;
            employee_designation.current.value = EMPLOYEE_CONTENT.test.employee_designation;
            employee_department.current.value = EMPLOYEE_CONTENT.test.employee_department;
            employee_privation_period.current.value = EMPLOYEE_CONTENT.test.employee_privation_period;
            employee_phone_no.current.value = EMPLOYEE_CONTENT.test.employee_phone_no;
            employee_whatsapp.current.value = EMPLOYEE_CONTENT.test.employee_whatsapp;
            employee_linkedin.current.value = EMPLOYEE_CONTENT.test.employee_linkedin;
            employee_skype.current.value = EMPLOYEE_CONTENT.test.employee_skype;
            employee_personal_email.current.value = EMPLOYEE_CONTENT.test.employee_personal_email;
            emergency_contact_name.current.value = EMPLOYEE_CONTENT.test.emergency_contact_name;
            emergency_contact_number.current.value = EMPLOYEE_CONTENT.test.emergency_contact_number;
            permanent_address1.current.value = EMPLOYEE_CONTENT.test.permanent_address1;
            permanent_address2.current.value = EMPLOYEE_CONTENT.test.permanent_address2;
            permanent_pincode.current.value = EMPLOYEE_CONTENT.test.permanent_pincode;
            permanent_city.current.value = EMPLOYEE_CONTENT.test.permanent_city;
            permanent_country.current.value = EMPLOYEE_CONTENT.test.permanent_country;
            personal_address1.current.value = EMPLOYEE_CONTENT.test.personal_address1;
            personal_address2.current.value = EMPLOYEE_CONTENT.test.personal_address2;
            personal_pincode.current.value = EMPLOYEE_CONTENT.test.personal_pincode;
            personal_city.current.value = EMPLOYEE_CONTENT.test.personal_city;
            personal_state.current.value = EMPLOYEE_CONTENT.test.personal_state;
            permanent_state.current.value = EMPLOYEE_CONTENT.test.permanent_state;
            personal_country.current.value = EMPLOYEE_CONTENT.test.personal_country;
            employee_gender.current.value = EMPLOYEE_CONTENT.test.employee_gender;
            employee_marital_status.current.value = EMPLOYEE_CONTENT.test.employee_martial_status;
        } else {
            employee_id.current.value = '';
            employee_name.current.value = '';
            employee_email.current.value = '';
            employee_designation.current.value = '';
            employee_department.current.option = '';
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
            permanent_country.current.value = '';
            personal_address1.current.value = '';
            personal_address2.current.value = '';
            personal_pincode.current.value = '';
            permanent_state.current.value = '';
            personal_state.current.value = '';
            personal_city.current.value = '';
            personal_country.current.value = '';
            employee_gender.current.value = '';
            employee_marital_status.current.value = '';
        }
    }

    // console.log(DEV_MODE)
    const handleSubmit = async () => {
        console.log({
            name: employee_name.current.value,
            email: employee_email.current.value,
            password: employee_password.current.value,

            address: permanent_address1.current.value,
            address2: permanent_address2.current.value,
            pin: permanent_pincode.current.value,
            city_id: permanent_city.current.value,
            state_id: permanent_state.current.value,
            country_id: permanent_country.current.value,

            PEaddress: personal_address1.current.value,
            PEaddress2: personal_address2.current.value,
            PEpin: personal_pincode.current.value,
            PEcountry_id: personal_country.current.value,
            PEcity_id: personal_city.current.value,
            PEstate_id: personal_state.current.value,

            company_id: GetCredentials().admpnlId,

            gender: employee_gender.current.getValue()[0].value,
            marital_status: employee_marital_status.current.value,

            phone_no: employee_phone_no.current.value,
            whatsapp: employee_whatsapp.current.value,
            linkedin: employee_linkedin.current.value,
            skype: employee_skype.current.value,
            personal_email: employee_personal_email.current.value,

            Econ_per_name: emergency_contact_name.current.value,
            Econ_per_number: emergency_contact_number.current.value,

            designation_id: employee_designation.current.getValue()[0].value,
            deparment_id: employee_department.current.getValue()[0].value,

            privation_period: employee_privation_period.current.value
        });

        const employee_data = {

            name: await encryptData(employee_name.current.value),
            email: await encryptData(employee_email.current.value),
            password: await encryptData(employee_password.current.value),

            address: await encryptData(permanent_address1.current.value),
            address2: await encryptData(permanent_address2.current.value),
            pin: await encryptData(permanent_pincode.current.value),
            city_id: await encryptData(permanent_city.current.value),
            state_id: await encryptData(permanent_state.current.value),
            country_id: await encryptData(permanent_country.current.value),

            PEaddress: await encryptData(personal_address1.current.value),
            PEaddress2: await encryptData(personal_address2.current.value),
            PEpin: await encryptData(personal_pincode.current.value),
            PEcountry_id: await encryptData(personal_country.current.value),
            PEcity_id: await encryptData(personal_city.current.value),
            PEstate_id: await encryptData(personal_state.current.value),

            company_id: GetCredentials().panelid,

            gender: await encryptData(employee_gender.current ? employee_gender.current.getValue()[0].value : "Gender"),

            marital_status: await encryptData(employee_marital_status.current.value),

            phone_no: await encryptData(employee_phone_no.current.value),
            whatsapp: await encryptData(employee_whatsapp.current.value),
            linkedin: await encryptData(employee_linkedin.current.value),
            skype: await encryptData(employee_skype.current.value),
            personal_email: await encryptData(employee_personal_email.current.value),

            Econ_per_name: await encryptData(emergency_contact_name.current.value),
            Econ_per_number: await encryptData(emergency_contact_number.current.value),

            designation_id: await encryptData(employee_designation.current ? employee_designation.current.getValue()[0].value : "Designation 1"),
            deparment_id: await encryptData(employee_department.current ? employee_department.current.getValue()[0].value : "Department 1"),

            privation_period: await encryptData(employee_privation_period.current.value)
        }
        dispatch(CREATE_EMPLOYEE(employee_data))
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
                            <Input ref={permanent_state} label="Permanent State" placeholder="Enter employee's permanent country..." type="text" />
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
                            <Input ref={personal_state} label="Personal State" placeholder="Enter employee city..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={personal_country} label="Personal Country" placeholder="Enter employee country..." type="text" />
                        </div>
                    </div>

                    <Checkbox placeholder="Same as Permanent address" ref={sameAddress} onChange={handleToggle} />

                    <h3 className="card-sub-title">Contact Info</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={employee_phone_no} label="Phone Number" placeholder="Enter employee's phone no..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_whatsapp} label="WhatsApp" placeholder="Enter employee's whatsapp no..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_linkedin} label="LinkedIn" placeholder="Enter employee's linkedin profile..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_skype} label="Skype" placeholder="Enter employee's skype ID..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={employee_personal_email} label="Personal Email" placeholder="Enter employee's personal email" type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={emergency_contact_name} label="Emergency Contact Name" placeholder="Enter employee's emergency contact name..." type="text" />
                        </div>
                        <div className="col-md-6">
                            <Input ref={emergency_contact_number} label="Emergency Contact Phone" placeholder="Enter employee's emergency contact number..." type="text" />
                        </div>
                    </div>



                    <h3 className="card-sub-title">Others</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input ref={employee_marital_status} label="Martial Status" placeholder="Enter employee's martial status" type="text" />
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
                        <Button text="Submit" onClick={() => handleSubmit()} />
                    </div>

                    <p>{updateMsg}</p>
                </div>
            </div>
        </Dialog>
    );
}
