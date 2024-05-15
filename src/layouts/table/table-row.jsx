import React from 'react'

export default function TableRow() {
    return (
        <tr className="jsgrid-alt-row">
            <td className="jsgrid-cell" style={{ width: 150 }}>
                Allegra Hull
            </td>
            <td
                className="jsgrid-cell jsgrid-align-right"
                style={{ width: 50 }}
            >
                22
            </td>
            <td className="jsgrid-cell" style={{ width: 200 }}>
                245-8891 Donec St.
            </td>
            <td
                className="jsgrid-cell jsgrid-align-center"
                style={{ width: 100 }}
            >
                France
            </td>
            <td
                className="jsgrid-cell jsgrid-align-center"
                style={{ width: 100 }}
            >
                <input type="checkbox" disabled="" />
            </td>
        </tr>
    )
}
