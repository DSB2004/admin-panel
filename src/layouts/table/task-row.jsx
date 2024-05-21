import React from 'react'
import Task from "../../assets/task.json"

export default function TaskRow({ data }) {
    return (
        <tr className="jsgrid-row">
            <td className="jsgrid-cell jsgrid-align-left" style={{ width: Task.width[0] }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quia.
            </td>
            <td className="jsgrid-cell jsgrid-align-center " style={{ width: Task.width[1] }}>
                ABC
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[2] }}>
                Low
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[3] }}>
                13/07/2024
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[4] }}>
                Active
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[4] }}>
                N/A
            </td>
        </tr>
    )
}
