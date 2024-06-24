import { Dialog } from "@mui/material";

// import Button from "../../../layouts/form/button";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Task from '../../../assets/task.json'
const ViewForm = ({ showModal, DISPATCH, task_id }) => {
    // const [TASK_DETAIL, SET_DETAIL] = useState();

    // const EMPLOYEE_STATE = useSelector(state => state.Employee);

    // useEffect(() => {
    //     if (emp_id) {
    //         const details = EMPLOYEE_STATE.search_content.filter(ele => ele['Employee ID'] === emp_id);
    //         if (details && details.length > 0) {
    //             SET_DETAIL(details[0]);

    //         }
    //     }
    // }, [emp_id])


    const [TASK_DETAIL, SET_DETAIL] = useState(Task.test);

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
                    <h3 className="card-title">View Task</h3>
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

                        {/* <div className='campaign-description-container'>
                            <div className='campaign-description-key'>ID</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['Employee ID']}</div>
                        </div> */}

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Title</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['title']}</div>
                        </div>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Assign by</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['assign_by'].label}</div>
                        </div>


                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Priority</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['priority'].label}</div>
                        </div>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Start Date</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['start_date']}</div>
                        </div>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>End Date</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['end-date']}</div>
                        </div>


                    </div>

                </div>

            </div>

        </Dialog >
    )
}
export default ViewForm;