import React, { useState } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import EmployeeRow from '../../../layouts/table/employee-row'
import Employee from "../../../assets/employee.json"
import EmployeeForm from './employee-form'
import { useSelector } from 'react-redux'
import Pagenation from '../../common/pagenation'

export default function EmployeeTable() {
    const EMPLOYEE_STATE = useSelector((state) => state.Employee);
    const [INDEX, TOGGLE_INDEX] = useState(0);
    const [showModal, toggleModal] = useState(false);
    return (
        <>
            <EmployeeForm showModal={showModal} toggleModal={toggleModal} />
            <div className="card">
                <div className="card-header">
                    <div className="card-tools">
                        <Button text="Add More Employee" className="btn-sm" onClick={() => toggleModal(true)} />
                    </div>
                </div>
                <div className="card-body">
                    <div id="jsGrid1" className="jsgrid" >
                        <div className="jsgrid-grid-body scrollbar-hidden">
                            <table className="jsgrid-table table" >
                                <thead>
                                    {Employee.header.map((element, index) => <THead width={Employee.width[index]} text={element} key={`TABLE-HEADER-TASK-${index}`} />)}
                                </thead>
                                <tbody >
                                    {
                                        EMPLOYEE_STATE.content.slice(INDEX, INDEX + 10).map(
                                            (element, index) => {
                                                return <EmployeeRow key={index} content={element} />
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Pagenation STATE={EMPLOYEE_STATE.content} changeIndex={TOGGLE_INDEX} />


            </div >
        </>
    )
}
