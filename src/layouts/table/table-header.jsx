import React from 'react'

export default function TableHeader({ text }) {
    return (
        <th
            className="sorting sorting_asc"
            tabIndex={0}
            aria-controls="example1"
            rowSpan={1}
            colSpan={1}
            aria-sort="ascending"
            aria-label="Rendering engine: activate to sort column descending"
        >
            {text}
        </th>
    )
}
