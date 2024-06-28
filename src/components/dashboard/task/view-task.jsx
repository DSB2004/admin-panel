import { Dialog } from "@mui/material";

// import Button from "../../../layouts/form/button";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// import Task from '../../../assets/task.json'
const ViewForm = ({ showModal, DISPATCH, task_id }) => {

    const [TASK_DETAIL, SET_DETAIL] = useState();

    const TASK_STATE = useSelector(state => state.Task);
    useEffect(() => {
        if (task_id) {
            console.log(TASK_STATE.search_content)

            const details = TASK_STATE.search_content.filter(ele => ele['Task_Id'] === task_id);
            if (details && details.length > 0) {
                console.log("Found");
                SET_DETAIL(details[0])

            }
        }
    }, [task_id])



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


                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Title</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['TaskTitle']}</div>
                        </div>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Assigned by</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['AssignedBy']}</div>
                        </div>


                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Priority</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['Priority']}</div>
                        </div>


                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Due Date</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['DueDate']}</div>
                        </div>

                        <div className='campaign-description-container'>
                            <div className='campaign-description-key'>Status</div>
                            <div>{TASK_DETAIL && TASK_DETAIL['Status']}</div>
                        </div>


                    </div>

                </div>

            </div>

        </Dialog >
    )
}
export default ViewForm;