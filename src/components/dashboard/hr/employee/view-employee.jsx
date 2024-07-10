import { Dialog } from "@mui/material";
import { GET_EMPLOYEE_PROFILE } from "../../../../provider/reducers/employee.reducer";
import EMPLOYEE from "../../../../assets/employee.json"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const ViewForm = ({ showModal, dispatch, id }) => {


    const [EMPLOYEE_DETAIL, SET_DETAIL] = useState();
    const DISPATCH_REDUX = useDispatch();

    const handleRender = async (id) => {
        const res = await DISPATCH_REDUX(GET_EMPLOYEE_PROFILE({ ID: id })).unwrap();
        const status = EMPLOYEE.status.find(ele => ele.value === res['Status']);
        res['Status'] = status ? status.label : "Not Found"
        const user_role = EMPLOYEE.designation.find(ele => ele.value === res['Designation ID']);
        res['User Role'] = user_role ? user_role.label : "Not Found"
        SET_DETAIL(res)
    }
    useEffect(() => {
        if (id && showModal) {
            handleRender(id)
        }
    }, [id])


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
                            onClick={() => dispatch({ type: "CLOSE" })}
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