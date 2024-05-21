import React from 'react'
import Task from "../../assets/task.json"

export default function EmployeeRow({ data }) {
    return (
        <tr className="jsgrid-row">
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[0] }}>
                Employee ID
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[0] }}>
                Employee name
            </td>
            <td className="jsgrid-cell jsgrid-align-center " style={{ width: Task.width[1] }}>
                employeeemail123@gmail.com
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[2] }}>
                Developer
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[3] }}>
                Manager 123
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[4] }}>
                Active
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[4] }}>
                ::
            </td>
        </tr>
    )
}
