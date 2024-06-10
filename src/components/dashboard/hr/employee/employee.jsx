import React, { useState, useReducer, useEffect } from 'react';

// utils

import EncryptData from '../../../../utils/encrypt_data.util';
// redux 
import { useSelector, useDispatch } from 'react-redux';
import { VIEW_EMPLOYEES, SEARCH_EMPLOYEE } from '../../../../provider/reducers/employee.reducer';

// icons
import { RiLoader2Fill } from "react-icons/ri";

// layouts
import Button from '../../../../layouts/form/button';
import THead from '../../../../layouts/table/table-header';
import Pagenation from '../../../../layouts/table/pagenation';
import ActionButton from "../../../../layouts/table/action-button";
import SearchBar from '../../../../layouts/table/search-bar';

// static content
import Employee from "../../../../assets/employee.json";

// forms
import CreateForm from './create-form';
import EditForm from './edit-form';

export default function EMPLOYEE() {
    const reducer = (state, action) => {
        const { type, id } = action;
        if (type === "VIEW") {
            return { id: id, type: "VIEW" };
        } else if (type === "ADD") {
            return { id: null, type: "ADD" };
        } else if (type === "EDIT") {
            return { id: id, type: "EDIT" };
        } else if (type === "CLOSE") {
            return { id: null, type: null };
        }
        return state;
    };
    const EMPLOYEE_STATE = useSelector((state) => state.Employee);
    const [STATE, DISPATCH] = useReducer(reducer, { id: null, type: null });
    const [PAGE, SET_PAGE] = useState(1);
    const [CONTENT, SET_CONTENT] = useState([])

    const ACTION_LIST = (ID) => [
        { content: "View", onClick: () => DISPATCH({ type: "VIEW", id: ID }) },
        { content: "Edit", onClick: () => DISPATCH({ type: "EDIT", id: ID }) },
        { content: "Mark As Suspended", onClick: () => console.log("Mark As Suspended") },
    ];

    const DISPATCH_ACTION = useDispatch();

    const HANDLE_PAGE_CHANGES = async (PAGE) => {
        const ENCRYPTED_DATA = await EncryptData({ PAGE });
        console.log(ENCRYPTED_DATA)
        DISPATCH_ACTION(VIEW_EMPLOYEES(ENCRYPTED_DATA));
    };

    useEffect(() => {
        if (PAGE) {
            // HANDLE_PAGE_CHANGES(PAGE);
        }
    }, [PAGE]);

    return (
        <>
            <CreateForm showModal={STATE.type === "ADD"} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
            <EditForm showModal={STATE.type === "EDIT"} emp_id={STATE.id} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
            <div className="card">
                <div className="card-header">
                    <div className="card-title" style={{ width: "260px" }} >
                        <SearchBar />
                    </div>
                    <div className="card-tools">
                        <Button text="Add Employee" className="btn-sm" onClick={() => DISPATCH({ type: "ADD" })} />
                    </div>
                </div>



                {
                    EMPLOYEE_STATE.content && EMPLOYEE_STATE.content.length != 0 ?
                        <>
                            <div className="card-body table-scroll">
                                <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                    <div className="row">
                                        <div className="col-sm-12">

                                            <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                                <thead>
                                                    {Employee.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)}
                                                </thead>
                                                <tbody>
                                                    {EMPLOYEE_STATE.content.map((element, index) => (
                                                        <tr className={index % 2 === 0 ? "even" : "odd"} key={element.emp_id}>
                                                            <td className="sorting_1 dtr-control" tabIndex={0}>
                                                                {element.emp_id}
                                                            </td>
                                                            <td>{element.emp_name}</td>
                                                            <td>{element.emp_mail}</td>
                                                            <td>{element.emp_role}</td>
                                                            <td>{element.report_to}</td>
                                                            <td>{element.status}</td>
                                                            <td>
                                                                <ActionButton actionList={ACTION_LIST(element.emp_id)} />
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <Pagenation STATE_CONTENT={EMPLOYEE_STATE.content} TOGGLE_INDEX={SETINDEX} /> */}
                        </>
                        :
                        <>
                            <RiLoader2Fill className='content-loader loader' />
                        </>
                }

            </div>
        </>
    );
}
