import React from 'react'
import Button from '../../../layouts/form/button'
import THead from '../../../layouts/table/table-header'
import Task from "../../../assets/task.json"
import TaskRow from '../../../layouts/table/task-row'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function TaskTable() {
    const navigate = useNavigate('');
    const [CurrentIndex, updateIndex] = useState(0);
    const [allowForward, setForward] = useState(false);
    const [allowBackward, setBackward] = useState(false);
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-tools">
                    <Button text="Add More Task" className="btn-sm" onClick={() => navigate("add-more")} />
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
    )
}
