import React, { useReducer, useState } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import EmployeeRow from '../../../layouts/table/employee-row'
import Employee from "../../../assets/employee.json"
import EmployeeForm from './employee-form'
import { useSelector } from 'react-redux'
import PageBtn from '../../../layouts/table/page_btn'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function EmployeeTable() {
    const EMPLOYEE_STATE = useSelector((state) => state.Employee);
    const reducer = (state, action) => {
        const { type, payload } = action;
        switch (type) {
            case "ADD":
                const addResult = state + payload * 10;
                return addResult < EMPLOYEE_STATE.content.length ? addResult : state;
            case "SUB":
                const subResult = state - payload * 10;
                return subResult >= 0 ? subResult : state;
            default:
                return state;
        }
    }
    const [INDEX, DISPATCH] = useReducer(reducer, 0);
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

                <div className='pagenation_div'>
                    <PageBtn onClick={() => DISPATCH({ type: "SUB", payload: 5 })}
                        className={INDEX === 0}
                    >
                        Prev 5th
                    </PageBtn>
                    <FaChevronLeft onClick={() => DISPATCH({ type: "SUB", payload: 1 })} />
                    <p className='pagenation_p'> {INDEX / 10 + 1}</p>
                    <FaChevronRight onClick={() => DISPATCH({ type: "ADD", payload: 1 })} />
                    <PageBtn onClick={() => DISPATCH({ type: "ADD", payload: 5 })}>
                        Next 5th
                    </PageBtn>
                </div>
            </div >
        </>
    )
}
