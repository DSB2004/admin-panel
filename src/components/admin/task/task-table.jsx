import React, { useEffect, useState } from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Task from "../../../assets/task.json"
import TaskRow from '../../../layouts/table/task-row'
import TaskForm from './task-form'
import Pagenation from "../../common/pagenation"
import { useSelector } from 'react-redux'

export default function TaskTable() {
    const [INDEX, SETINDEX] = useState(0);
    const [showModal, toggleModal] = useState(false);
    const TASK_STATE = useSelector(state => state.Task)

    useEffect(() => {
        console.log(INDEX)
    }, [INDEX])
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
                                    {
                                        TASK_STATE.content.slice(INDEX, INDEX + 10).map(
                                            (element, index) => {
                                                return <TaskRow key={index} content={element} />
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Pagenation changeIndex={SETINDEX} STATE={TASK_STATE.content} />
                    </div>
                </div>
            </div>
        </>
    )
}
