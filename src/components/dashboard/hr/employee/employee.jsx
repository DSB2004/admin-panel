import React, { useState, useReducer, useEffect, useRef } from 'react';

// utils

import { useSelector, useDispatch } from 'react-redux';
import { GET_EMPLOYEES } from '../../../../provider/reducers/employee.reducer';

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
    const DISPATCH_REDUX = useDispatch();


    //  to handle modal render 
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
        }
        else if (type === "CLOSE") {
            return { id: null, type: "CLOSE" };
        }
        return state;
    };
    const [STATE, DISPATCH] = useReducer(reducer, { id: null, type: null });

    // redux state
    const EMPLOYEE_STATE = useSelector((state) => state.Employee);

    //  managing page counter
    const [PAGE, SET_PAGE] = useState(1);

    // managing content on page
    const [CONTENT, SET_CONTENT] = useState([]);

    //  managing loading state 
    const [loading, set_loading] = useState(false);

    // managing search content
    const [searchBody, setSearchBody] = useState();


    //  for action button
    const ACTION_LIST = (ID) => [
        { content: "View", onClick: () => DISPATCH({ type: "VIEW", id: ID }) },
        { content: "Edit", onClick: () => DISPATCH({ type: "EDIT", id: ID }) },
        { content: "Mark As Suspended", onClick: () => DISPATCH({ type: "STATUS", id: ID }) },
    ];




    const handleContentRender = async (content) => {
        // content: { page:number,searchType:string||undefined,searchVal:string||undefined}
        set_loading(true);
        try {
            const res = await DISPATCH_REDUX(GET_EMPLOYEES(content)).unwrap();
            const { data } = res;
            SET_CONTENT(data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            set_loading(false);
        }
    }


    const handleSearch = (searchBody) => {
        setSearchBody(searchBody);
    }

    useEffect(() => {
        handleContentRender({ page: PAGE, body: searchBody })
    }, [PAGE, searchBody]);






    return (
        <>
            {
                STATE.type === "ADD" ? <>
                    <CreateForm
                        showModal={STATE.type === "ADD"}
                        getData={handleContentRender}
                        dispatch={DISPATCH} />
                </> : <></>
            }
            {
                STATE.type === "EDIT" ? <>
                    <EditForm
                        showModal={STATE.type === "EDIT"}
                        getData={handleContentRender}
                        id={STATE.id}
                        page={PAGE}
                        dispatch={DISPATCH} />
                </> : <></>
            }
            {
                STATE.type === "VIEW" ? <>
                    <ViewForm
                        showModal={STATE.type === 'VIEW'}
                        page={PAGE}
                        id={STATE.id}
                        dispatch={DISPATCH} />
                </> : <></>
            }
            {
                STATE.type === "STATUS" ? <>
                    <Suspended
                        showModal={STATE.type === 'STATUS'}
                        getData={handleContentRender}
                        id={STATE.id}
                        dispatch={DISPATCH}
                        page={PAGE} />
                </> : <></>
            }
            {/* HEADER */}

            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <SearchBar placeholder="Search by Employee ID"
                                handleSearch={handleSearch}
                                dropdownOption={Employee.search_key}
                            />
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

