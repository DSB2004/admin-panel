import React, { useState } from 'react'

import Button from '../../../../layouts/form/button'
import THead from '../../../../layouts/table/table-header'
import EmployeeRow from '../../../../layouts/table/employee-row'
import Employee from "../../../../assets/employee.json"
import Form from './form'
import { useSelector } from 'react-redux'
import Pagenation from '../../../../layouts/table/pagenation'
export default function EMPLOYEE() {
    const EMPLOYEE_STATE = useSelector((state) => state.Employee);
    const [INDEX, SETINDEX] = useState(0);
    const [showModal, toggleModal] = useState(false);
    return (
        <>
            <Form showModal={showModal} toggleModal={toggleModal} />
            <div className="card">


                <div className="card-header">
                    <h3 className="card-title">Employee Table</h3>
                    <div className="card-tools">
                        <Button text="Add Employee" className="btn-sm" onClick={() => toggleModal(true)} />
                    </div>
                </div>



                <div className="card-body table-scroll">
                    <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">

                        <div className="row">
                            <div className="col-sm-12">
                                <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                    <thead>
                                        {
                                            Employee.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)
                                        }
                                    </thead>
                                    <tbody>


                                        {
                                            EMPLOYEE_STATE.content.slice(INDEX, INDEX + 10).map((element, index) => {
                                                if (index % 2 === 0) {
                                                    return (
                                                        <>
                                                            <tr className="odd">
                                                                <td className="sorting_1 dtr-control" tabIndex={0}>
                                                                    {element.emp_id}
                                                                </td>
                                                                <td>{element.emp_name}</td>
                                                                <td>{element.emp_mail}</td>
                                                                <td>{element.emp_role}</td>
                                                                <td>{element.report_to}</td>
                                                                <td>{element.status}</td>

                                                            </tr>
                                                        </>)
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <tr className="odd">
                                                                <td className="sorting_1 dtr-control" tabIndex={0}>
                                                                    {element.emp_id}
                                                                </td>
                                                                <td>  {element.emp_name}</td>
                                                                <td>{element.emp_mail}</td>
                                                                <td>{element.emp_role}</td>
                                                                <td>{element.report_to}</td>
                                                                <td>{element.status}</td>

                                                            </tr>
                                                        </>)
                                                }
                                            })
                                        }



                                    </tbody>
                                    <tfoot>
                                        {
                                            Employee.header.map(element => <THead text={element} key={`tabl-header-${element}`} />)
                                        }
                                    </tfoot>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                <Pagenation STATE_CONTENT={EMPLOYEE_STATE.content} TOGGLE_INDEX={SETINDEX} />
            </div >
        </>
    )
}
