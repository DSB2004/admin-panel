import React, { useState, useReducer, useEffect, useRef } from 'react';

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
    const SearchID = useRef();


    const ACTION_LIST = (ID) => [
        { content: "View", onClick: () => DISPATCH({ type: "VIEW", id: ID }) },
        { content: "Edit", onClick: () => DISPATCH({ type: "EDIT", id: ID }) },
        { content: "Mark As Suspended", onClick: () => console.log("Mark As Suspended") },
    ];

    const DISPATCH_ACTION = useDispatch();



    const HandleSearch = async () => {
        if (SearchID.current.value && SearchID.current.value != "") {
            const res = await DISPATCH_ACTION(SEARCH_EMPLOYEE({ ID: SearchID.current.value })).unwrap();
            SET_CONTENT(res)

        }

    }
    useEffect(() => {
        const handlePageChange = async () => {
            if (PAGE) {
                const res = await DISPATCH_ACTION(VIEW_EMPLOYEES({ PAGE })).unwrap();
                const { data } = res;
                console.log(data)
                SET_CONTENT(data)
            }
        }
        handlePageChange()
    }, [PAGE]);




    return (
        <>
            <CreateForm showModal={STATE.type === "ADD"} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
            <EditForm showModal={STATE.type === "EDIT"} emp_id={STATE.id} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
            <div className="card table-card">
                <div className="card-header">
                    <div className="card-title" style={{ width: "260px" }} >
                        <SearchBar SearchFunction={() => { HandleSearch() }} ref={SearchID} />
                    </div>
                    <div className="card-tools">
                        <Button text="Add Employee" className="btn-sm" onClick={() => DISPATCH({ type: "ADD" })} />
                    </div>
                </div>

                {
                    !EMPLOYEE_STATE.content_loading ?
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
                                                    {CONTENT && CONTENT.length > 0 && CONTENT.map((element, index) => (
                                                        <tr className={index % 2 === 0 ? "even" : "odd"} key={element.emp_id}>
                                                            <td className="sorting_1 dtr-control" tabIndex={0}>
                                                                {element["Employee ID"]}
                                                            </td>
                                                            <td>{element["Employee Name"]}</td>
                                                            <td>{element["Employee Email"]}</td>
                                                            <td>{element['User Role']}</td>
                                                            <td>{element['Reporting To']}</td>
                                                            <td>{element['Status']}</td>
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
                            {/* <Pagenation CHANGE_PAGE={SET_PAGE} TOTAL={EMPLOYEE_STATE.total_count} PAGE={PAGE} /> */}
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
