import React, { useState, useReducer } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Task from "../../../assets/task.json"
import TaskRow from '../../../layouts/table/task-row'
import TaskForm from './task-form'

export default function TaskTable() {
    // const TASK_STATE = useSelector((state) => state.Employee);
    // const reducer = (state, action) => {
    //     const { type, payload } = action;
    //     switch (type) {
    //         case "ADD":
    //             const addResult = state + payload * 10;
    //             return addResult < EMPLOYEE_STATE.content.length ? addResult : state;
    //         case "SUB":
    //             const subResult = state - payload * 10;
    //             return subResult >= 0 ? subResult : state;
    //         default:
    //             return state;
    //     }
    // }
    // const [INDEX, DISPATCH] = useReducer(reducer, 0);
    const [showModal, toggleModal] = useState(false);
    return (
        <>
            <TaskForm showModal={showModal} toggleModal={toggleModal} />
            <div className="card">
                <div className="card-header">
                    <div className="card-tools">
                        <Button text="Add More Task" className="btn-sm" onClick={() => toggleModal(true)} />
                    </div>
                </div>
                <div className="card-body">
                    <div id="jsGrid1" className="jsgrid" >
                        <div className="jsgrid-grid-body scrollbar-hidden">
                            <table className="jsgrid-table table" >
                                <thead>
                                    {Task.header.map((element, index) => <THead width={Task.width[index]} text={element} key={`TABLE-HEADER-TASK-${index}`} />)}
                                </thead>
                                <tbody >
                                    <TaskRow />
                                    <TaskRow />
                                    <TaskRow />
                                    <TaskRow />
                                    <TaskRow />
                                    <TaskRow />
                                    <TaskRow />
                                    <TaskRow />
                                    <TaskRow />
                                </tbody>
                            </table>
                        </div>
                        <div className="btn-group flex-justify">
                            <button type="button" className="btn btn-default" fdprocessedid="mqprk">
                                Previous Page
                            </button>

                            <button type="button" className="btn btn-default" fdprocessedid="m7wuie">
                                Next Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
