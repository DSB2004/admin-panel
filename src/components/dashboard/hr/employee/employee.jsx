import React, { useState, useReducer, useEffect, useRef } from 'react';

// utils

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
import ViewForm from './view-employee';
import Suspended from './mark-as-suspended';


export default function EMPLOYEE() {
    const reducer = (state, action) => {
        const { type, id } = action;
        if (type === "VIEW") {
            return { id: id, type: "VIEW" };
        } else if (type === "ADD") {
            return { id: null, type: "ADD" };
        } else if (type === "EDIT") {
            return { id: id, type: "EDIT" };
        } else if (type === "STATUS") {
            return { id: id, type: "STATUS" };
        } else if (type === "CLOSE") {
            return { id: null, type: "CLOSE" };
        }
        return state;
    };

    const EMPLOYEE_STATE = useSelector((state) => state.Employee);
    const [STATE, DISPATCH] = useReducer(reducer, { id: null, type: null });
    const [PAGE, SET_PAGE] = useState(1);
    const [CONTENT, SET_CONTENT] = useState([])
    const SearchID = useRef();

    const [loading, set_loading] = useState(false);

    const ACTION_LIST = (ID) => [
        { content: "View", onClick: () => DISPATCH({ type: "VIEW", id: ID }) },
        { content: "Edit", onClick: () => DISPATCH({ type: "EDIT", id: ID }) },
        { content: "Mark As Suspended", onClick: () => DISPATCH({ type: "STATUS", id: ID }) },
    ];

    const DISPATCH_ACTION = useDispatch();



    const HandleSearch = async () => {
        // set_loading(true);
        // if (SearchID.current.value && SearchID.current.value != "") {
        //     const res = await DISPATCH_ACTION(SEARCH_EMPLOYEE({ ID: SearchID.current.value })).unwrap();
        //     SET_CONTENT(res)
        // }
        // set_loading(false)
    }


    const handlePageChange = async (PAGE) => {
        if (PAGE) {
            set_loading(true);
            const CACHE_DATA = EMPLOYEE_STATE.content.find(ele => ele.page === PAGE);
            if (!CACHE_DATA) {
                console.log('API called');
                try {
                    const res = await DISPATCH_ACTION(VIEW_EMPLOYEES({ PAGE })).unwrap();
                    const { data } = res;
                    SET_CONTENT(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                SET_CONTENT(CACHE_DATA.data);
            }
            set_loading(false);
        }
    };

    useEffect(() => {
        handlePageChange(PAGE)
    }, [PAGE, EMPLOYEE_STATE.content]);


    return (
        <>
            {
                STATE.type === "ADD" ? <>
                    <CreateForm showModal={STATE.type === "ADD"} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
                </> : <></>
            }
            {
                STATE.type === "EDIT" ? <>
                    <EditForm showModal={STATE.type === "EDIT"} page={PAGE} emp_id={STATE.id} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
                </> : <></>
            }
            {
                STATE.type === "VIEW" ? <>
                    <ViewForm showModal={STATE.type === 'VIEW'} emp_id={STATE.id} DISPATCH={DISPATCH} ></ViewForm>
                </> : <></>
            }
            {
                STATE.type === "STATUS" ? <>
                    <Suspended showModal={STATE.type === 'STATUS'} page={PAGE} emp_id={STATE.id} toggleModal={() => DISPATCH({ type: "CLOSE" })} />
                </> : <></>
            }
            {/* HEADER */}

            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <SearchBar placeholder="Search by Employee ID" SearchFunction={HandleSearch} ref={SearchID} />
                        </div>

                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <Button text="Add Employee" className="btn-sm margin-top-10" onClick={() => DISPATCH({ type: "ADD" })} />
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* HEADER */}
            {
                !loading ?
                    <>
                        <section className='content overflow-content'>
                            <div class="container-fluid">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Employee Details</h3>
                                            </div>
                                            <div className="card-body table-scroll">
                                                <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6" /><div className="col-sm-12 col-md-6" /></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                                    <thead>

                                                        <tr>
                                                            {Employee.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)}
                                                        </tr>

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
                                                                    <ActionButton actionList={ACTION_LIST(element['Auto Employee ID'])} />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                </div>
                                                </div>
                                                    <Pagenation TOTAL={EMPLOYEE_STATE.total_count} SET_PAGE={SET_PAGE} CURRENT_PAGE={PAGE} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </> :
                    <>
                        <RiLoader2Fill className='content-loader loader' />
                    </>
            }
        </>
    )
}

