import React from 'react'

export default function THead({ width, text }) {
    return (
        <th
            className="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
            style={{ width: width }}
        >
            {text}
        </th>
    )
}
