import React from 'react'

export default function THead({ width, text }) {
    return (
        <th className="sorting sorting_asc" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">
            {text}
        </th>
    )
}
