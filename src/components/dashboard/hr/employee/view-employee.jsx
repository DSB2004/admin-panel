import { Dialog } from "@mui/material";

import Button from "../../../../layouts/form/button";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const ViewForm = ({ showModal, DISPATCH, emp_id }) => {
    const [EMPLOYEE_DETAIL, SET_DETAIL] = useState();

    const EMPLOYEE_STATE = useSelector(state => state.Employee);

    useEffect(() => {
        if (emp_id) {
            const details = EMPLOYEE_STATE.search_content.filter(ele => ele['Auto Employee ID'] === emp_id);
            if (details && details.length > 0) {
                SET_DETAIL(details[0]);

            }
        }
    }, [emp_id])


    return (
        <Dialog
            open={showModal}
            maxWidth="lg"
            sx={{
                '& .MuiPaper-root': {
                    width: 550,
                    height: 'auto',

                },
            }}>
            <div className="card card-default">
                <div className="card-header">
                    <h3 className="card-title">View Employee</h3>
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
                <div >
                    <div className='campaign-description'>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>ID</div>
                            <div>{EMPLOYEE_DETAIL && EMPLOYEE_DETAIL['Employee ID']}</div>
                        </div>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Name</div>
                            <div>{EMPLOYEE_DETAIL && EMPLOYEE_DETAIL['Employee Name']}</div>
                        </div>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Email</div>
                            <div style={{ textTransform: "lowercase" }}>{EMPLOYEE_DETAIL && EMPLOYEE_DETAIL['Employee Email']}</div>
                        </div>


                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>User Role</div>
                            <div>{EMPLOYEE_DETAIL && EMPLOYEE_DETAIL['User Role']}</div>
                        </div>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Reporting To</div>
                            <div>{EMPLOYEE_DETAIL && EMPLOYEE_DETAIL['Reporting To']}</div>
                        </div>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Status</div>
                            <div>{EMPLOYEE_DETAIL && EMPLOYEE_DETAIL['Status']}</div>
                        </div>


                    </div>

                </div>

            </div>

        </Dialog >
    )
}
export default ViewForm;