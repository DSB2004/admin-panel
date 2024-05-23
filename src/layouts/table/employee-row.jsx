import React from 'react';
import Task from "../../assets/task.json";

export default function EmployeeRow({ content }) {
    return (
        <tr className="jsgrid-row">
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[0] }}>
                {content ? content.emp_id : 'Employee ID'}
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[0] }}>
                {content ? content.emp_name : 'Employee name'}
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[1] }}>
                {content ? content.emp_mail : 'employeeemail123@gmail.com'}
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[2] }}>
                {content ? content.emp_role : 'Developer'}
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[3] }}>
                {content ? content.report_to : 'Manager 123'}
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[4] }}>
                {content ? content.status : 'Active'}
            </td>
            <td className="jsgrid-cell jsgrid-align-center" style={{ width: Task.width[4] }}>
                {/* {content ? content.actions : '::'} */}
            </td>
        </tr>
    );
}
