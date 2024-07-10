import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog } from '@mui/material'
import Button from '../../../../layouts/form/button'
import { RiLoader2Fill } from "react-icons/ri";
import { SUSPEND_EMPLOYEE } from '../../../../provider/reducers/employee.reducer';
import EMPLOYEE from "../../../../assets/employee.json"
export default function Suspended({ showModal, dispatch, id, page, getData }) {
    const [alertMsg, update_msg] = useState('');
    const [EMPLOYEE_DETAIL, SET_DETAIL] = useState();
    const EMPLOYEE_STATE = useSelector(state => state.Employee);

    const DISPATCH_REDUX = useDispatch()

    useEffect(() => {
        if (id && page && showModal) {
            const details = EMPLOYEE_STATE.content[page]
            if (details && details.length > 0) {
                SET_DETAIL(details.find(ele => ele["Auto Employee ID"] === id));

            }
        }
    }, [id, page])

    const suspendEmployee = async () => {
        try {

            update_msg(<RiLoader2Fill className='loader' />)
            const data = {
                page: page,
                auto_emp_id: id,
                status: EMPLOYEE.status.find(ele => ele.label === "Suspended").value
            }
            const res = await DISPATCH_REDUX(SUSPEND_EMPLOYEE(data)).unwrap();
            if (res) {
                dispatch({ type: "CLOSE", id: null });
                getData()
            }
        } catch (err) {
            update_msg(err.message);
        }
    }
    return (
        <>
            <Dialog
                open={showModal}
                maxWidth="lg"
                fullWidth={false}
                sx={{
                    '& .MuiPaper-root': {
                        width: '40%',
                        height: 'auto',
                        maxWidth: 'none'
                    },
                }}>
                <div className="card card-default overflow-hidden">
                    <div className="card-header">
                        <h3 className="card-title">Suspend Employee</h3>
                        <div className="card-tools">
                            <button
                                type="button"
                                className="btn btn-tool visible"
                                onClick={() => dispatch({ type: "CLOSE", id: null })}
                                fdprocessedid="kxhf0x"
                            >
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className='center-content '>Are you sure to Suspended this Employee</h4>
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
                                <div className='campaign-description-key'>Status</div>
                                <div>{EMPLOYEE_DETAIL && EMPLOYEE_DETAIL['Status']}</div>
                            </div>
                        </div>


                        <Button text="Suspend Employee" className="btn btn-danger" onClick={() => suspendEmployee()} />
                        <Button text="Cancel" className="btn margin-top-10" onClick={() => dispatch({ type: "CLOSE", id: null })} />

                    </div>
                    <p className='alert-message'>{alertMsg}</p>
                </div>
                {/* </div> */}
            </Dialog >
        </>

    )
}
